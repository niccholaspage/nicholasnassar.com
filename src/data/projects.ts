import type { Lang } from "shiki";

interface BaseProject {
  name: string;
  language: string;
  description: string;
}

interface ImageProject extends BaseProject {
  imageUrl: string;
}

interface CodeProject extends BaseProject {
  codeSample: string;
  codeLanguage: Lang;
}

type Project = ImageProject | CodeProject;

const projects: Project[] = [
  {
    name: "DSL Builder",
    codeLanguage: "kotlin",
    codeSample: `
@GenerateBuilder
class Person(val firstName: String, val lastName: String, val pet: Pet)

@GenerateBuilder
open class Pet(val name: String, val breed: String)

fun main() {
    val person = PersonBuilder().apply {
        firstName = "Nicholas"
        lastName = "Nassar"

        pet {
            name = "ZuZu"
            breed = "Yorkie"
        }
    }.build()
}`.trim(),
    language: "Kotlin",
    description: [
      "DSL Builder is a compile-time dependency that automatically generates domain-specific languages based on annotations attached to Kotlin classes and properties.",
      "It utilizes Google's Kotlin Symbol Processing API to hook into the Kotlin compiler to process program source code.",
      "Square's KotlinPoet library is used to generate builders in Kotlin code for annotated classes.",
      "Using DSL Builder reduced boilerplate code by 95% in a dependent project through removal of repetitive DSL code.",
      "On every commit to the main branch of the GitHub project, GitHub Actions automatically builds and publishes updated Maven packages.",
    ].join(" "),
  },
];

export { projects };
