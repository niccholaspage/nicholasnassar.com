import type { Lang } from "shiki";

interface BaseProject {
  name: string;
  href: string;
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
    href: "https://github.com/niccholaspage/rusty-lox",
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
  {
    name: "Rusty Lox",
    href: "https://github.com/niccholaspage/rusty-lox",
    language: "Rust",
    imageUrl: "",
    description: [
      "An implementation of the tree-walk interpreter from the Crafting Interpreters book in Rust.",
      "The goal is to finish up the interpreter and end up with an implementation of the interpreter",
      "that matches one to one in functionality with the Java version written in the book and passes all tests.",
    ].join(" "),
  },
];

export { projects };
