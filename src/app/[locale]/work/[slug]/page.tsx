import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { formatDate } from "@/app/utils/formatDate";
import styles from "@/components/work/Projects.module.scss";

interface WorkParams {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  const locales = routing.locales;

  // Create an array to store all posts from all locales
  const allPosts = [];

  // Fetch posts for each locale
  for (const locale of locales) {
    const posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
    allPosts.push(
      ...posts.map((post) => ({
        slug: post.slug,
        locale: locale,
      }))
    );
  }

  return allPosts;
}

export function generateMetadata({ params: { slug, locale } }: WorkParams) {
  let post = getPosts(["src", "app", "[locale]", "work", "projects", locale]).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, images, image, tech, links } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    tech,
    links,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/${locale}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }: WorkParams) {
  unstable_setRequestLocale(params.locale);
  let post = getPosts(["src", "app", "[locale]", "work", "projects", params.locale]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  const t = useTranslations();
  const { person } = renderContent(t);

  const links =
    post.metadata.links?.map((link) => ({
      name: link.name,
      url: link.url,
      icon: link.icon,
    })) || [];

  const avatars =
    post.metadata.tech?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Flex as="section" fillWidth maxWidth="m" direction="column" alignItems="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/${params.locale}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Flex fillWidth maxWidth="xs" gap="16" direction="column">
        <Button href={`/${params.locale}/work`} variant="tertiary" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>

        <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap>
          {links.map((link, index) => (
            <Button
              key={index}
              href={link.url}
              variant="primary"
              size="s"
              prefixIcon={link.icon}
              target="_blank"
              rel="noopener noreferrer">
              {link.name}
            </Button>
          ))}
        </Flex>
      </Flex>
      {post.metadata.images.length > 0 && (
        <SmartImage aspectRatio="16 / 9" radius="m" alt="image" src={post.metadata.images[0]} />
      )}
      <Flex style={{ margin: "auto" }} as="article" maxWidth="xs" fillWidth direction="column">
        <Flex gap="12" marginBottom="24" alignItems="center">
          {post.metadata.tech && <AvatarGroup reverseOrder avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Flex>
    </Flex>
  );
}
