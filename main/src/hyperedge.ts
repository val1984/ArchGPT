import { ArST, ArST_withMetaInfo } from "./parser"

export type HyperEdge = {
  vertices: Vertex[]
  template: ArST
}

export type Vertex = {
  type: string
  content: ArST
}


export const hyperEdgeFromFile = (file: ArST_withMetaInfo): HyperEdge => {

  const fileHasFishAnnotation = false

  if (fileHasFishAnnotation) {


  } else {

    return {
      vertices: [],
      template: file.ast
    }

  }

}

// when you have lists in the AST
const lookForLispSimilarity = () => {

}

// when you have nested structures in the AST
const lookForInductiveSimilarity = () => {


}