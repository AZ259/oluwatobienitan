import Image from "next/image";

const HERO_IMAGE =
  "https://news.oluwatobienitan.com/wp-content/uploads/2025/12/cropped-2-removebg-preview.png";

export default function PageHeader({ badge, title, description, image, imageAlt, children }) {
  return (
    <section className="page-header">
      <div className="container page-header-container">
        <div className="page-header-content">
          {badge && <span className="badge">{badge}</span>}
          {title && <h1 className="header-title">{title}</h1>}
          {description && <p className="header-desc">{description}</p>}
          {children && <div className="page-header-children">{children}</div>}
        </div>
        <div className="page-header-graphic">
          <div className="circle-glow"></div>
          <div className="page-header-image-shell">
            <Image
              src={image || HERO_IMAGE}
              alt={imageAlt || "Oluwatobi Enitan"}
              className="page-header-image"
              width={360}
              height={420}
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}
