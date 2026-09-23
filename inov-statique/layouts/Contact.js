import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Composants React utilisables dans le Markdown
import BackButton from "./shortcodes/BackButton";
import SousMenuButton from "./shortcodes/sousMenuButton";
import MenuButton2 from "./shortcodes/menuButton2";

const components = {
  BackButton,
  SousMenuButton,
  MenuButton2,
};

const Contact = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  return (
    <section className="section">
      <div className="container w-full">

        {/* Titre */}
        {markdownify(title, "h1", "h2 mb-8 text-center")}

        {/* Bouton retour placé dans le layout */}
        {/* <div className="mb-6">
          <BackButton href="/" label="Retour" />
        </div> */}

        {/* Contenu MDX */}
        <div className="prose max-w-none mb-10">
          <MDXRemote source={content} components={components} />
        </div>
      </div>

    </section>
  );
};

export default Contact;
