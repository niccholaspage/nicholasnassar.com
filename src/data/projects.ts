import type { Lang, ILanguageRegistration } from "shiki";

import LoxLanguageGrammar from "../tm-langs/lox.tmLanguage.json";

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
  codeLanguage: Lang | ILanguageRegistration;
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
            name = "Pepper"
            breed = "Domestic Shorthair"
        }
    }.build()

    println("Hi, I'm \${person.firstName} \${person.lastName}!")
    println("I have a cat called \${person.pet.name}!")
}`.trim(),
    language: "Kotlin",
    description: [
      "DSL Builder is a compile-time dependency that automatically generates domain-specific languages based on annotations attached to Kotlin classes and properties.",
      "It utilizes Google's Kotlin Symbol Processing API to hook into the Kotlin compiler to process program source code.",
      "Square's KotlinPoet library is used to generate builders in Kotlin code for annotated classes.",
      "Using DSL Builder reduced boilerplate code by 95% in a dependent project through removal of repetitive DSL code.",
      "On every commit to the main branch of the GitHub project, builds are automatically published to Maven Central.",
    ].join(" "),
  },
  {
    name: "Rusty Lox",
    href: "https://github.com/niccholaspage/rusty-lox",
    language: "Rust",
    codeLanguage: {
      id: "lox",
      scopeName: "source.lox",
      grammar: LoxLanguageGrammar as any,
      aliases: [],
    },
    codeSample: `
// Still working on control flow
// so nothing too crazy here yet :)
var a = "global a";
{
  var a = "outer a";
  var b = "outer b";
  {
    print a;
    print b;
  }
  print a;
}
// Output:
// outer a
// outer b
// outer a
    `.trim(),
    description: [
      "An implementation of the tree-walk interpreter from the Crafting Interpreters book in Rust.",
      "The goal is to finish up the interpreter and end up with an implementation of the interpreter",
      "that matches one to one in functionality with the Java version written in the book and passes all tests.",
    ].join(" "),
  },
  {
    name: "nicholasnassar.com",
    href: "https://github.com/niccholaspage/nicholasnassar.com",
    language: "TypeScript",
    codeLanguage: "typescript",
    codeSample: `
import type { Component } from "solid-js";
import { isMobileMenuOpen, setMobileMenuOpen } from "./MobileMenuState";

export const MobileMenu: Component<MobileMenuProps> = (props) => {
  const classes = () => (isMobileMenuOpen() ? "sm:hidden" : "hidden");
  return (
    <div class={classes()} id="mobile-menu">
      {props.children}
    </div>
  );
};    
    `.trim(),
    description: [
      "The site you are currently on, built with Astro, Solid, TailwindCSS, and TypeScript.",
      "Astro is great for static sites. Its island architecture and partial hydration allow",
      "for this site to be mostly static, save for some interactive components, like the top menu",
      "on mobile. This results in a small amount of JS being shipped to the client and",
      "perfect Lighthouse scores, while still being an incredible developer experience.",
    ].join(" "),
  },
];

export { projects };
