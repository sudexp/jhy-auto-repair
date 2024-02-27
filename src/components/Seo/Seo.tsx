import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  name: string;
  type: string;
  lang?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, name, type, lang = 'fi', keywords, image, url }: SeoProps) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={'%s | Jyväskylän Huoltoykköset'}
      meta={[
        // Standard metadata tags
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        // Facebook tags
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:image', content: image },
        // Twitter tags
        { name: 'twitter:card', content: type },
        { name: 'twitter:creator', content: name },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ]}
      link={url ? [{ rel: 'canonical', href: url }] : []}
    />
  );
};

export default Seo;
