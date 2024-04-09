import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <>
    <article class={classString}>{content}</article>
    <script src="https://giscus.app/client.js"
      data-repo="rmortes/rmortes.github.io"
      data-repo-id="R_kgDOLrz9Hw"
      data-category="Comments"
      data-category-id="DIC_kwDOLrz9H84Cek4B"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="noborder_dark"
      data-lang="es"
      data-loading="lazy"
      crossorigin="anonymous"
      async>
    </script>
  </>
}

export default (() => Content) satisfies QuartzComponentConstructor
