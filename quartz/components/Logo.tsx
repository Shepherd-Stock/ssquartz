import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={classNames(displayClass, "site-brand")}>
      <a class="brand-link" href={baseDir} aria-label={cfg.pageTitle}>
        <img class="brand-mark" src={`${baseDir}static/ss.svg`} alt="" />
        <span class="brand-title">{cfg.pageTitle}</span>
      </a>
    </div>
  )
}

export default (() => Logo) satisfies QuartzComponentConstructor
