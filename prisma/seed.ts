import prisma from "@/lib/prisma";

async function main() {
  await prisma.snippet.createMany({
    data: [
      {
        title: "Hello World in JavaScript",
        language: "javascript",
        code: `console.log("Hello, World!");

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Prisma"));`,
      },
      {
        title: "Hello World in Python",
        language: "python",
        code: `print("Hello, World!")

def greet(name):
    return f"Hello, {name}!"

print(greet("Prisma"))`,
      },
      {
        title: "Hello World in Java",
        language: "java",
        code: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }

  public static String greet(String name) {
    return "Hello, " + name + "!";
  }

  public static void main(String[] args) {
    System.out.println(greet("Prisma"));
  }
}`,
      },
      {
        title: "Hello World in C",
        language: "c",
        code: `#include <stdio.h>

void greet(char* name) {
    printf("Hello, %s!", name);
}

int main() {
    printf("Hello, World!");
    greet("Prisma");
    return 0;
}`,
      },
      {
        title: "Hello World in C++",
        language: "cpp",
        code: `#include <iostream>

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    std::cout << "Hello, World!" << std::endl;
    greet("Prisma");
    return 0;
}`,
      },
      {
        title: "Hello World in C#",
        language: "csharp",
        code: `using System;

class HelloWorld {
    static void Main() {
        Console.WriteLine("Hello, World!");
        greet("Prisma");
    }

    static void greet(string name) {
        Console.WriteLine("Hello, " + name + "!");
    }
}`,
      },
      {
        title: "Hello World in Go",
        language: "go",
        code: `package main

import "fmt"

func greet(name string) {
    fmt.Printf("Hello, %s!", name)
}

func main() {
    fmt.Println("Hello, World!")
    greet("Prisma")
}`,
      },
      {
        title: "Hello World in Ruby",
        language: "ruby",
        code: `puts "Hello, World!"

def greet(name)
  puts "Hello, #{name}!"
end

greet("Prisma")`,
      },
      {
        title: "Hello World in Swift",
        language: "swift",
        code: `print("Hello, World!")

func greet(_ name: String) {
    print("Hello, \(name)!")
}

greet("Prisma")`,
      },
      {
        title: "Hello World in Kotlin",
        language: "kotlin",
        code: `fun main() {
    println("Hello, World!")
    greet("Prisma")
}

fun greet(name: String) {
    println("Hello, $name!")
}`,
      },
    ],
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
