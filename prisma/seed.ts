import prisma from "@/lib/prisma";

async function main() {
  await prisma.snippet.createMany({
    data: [
      {
        title: "Hello World in JavaScript",
        language: "JavaScript",
        code: `console.log("Hello, World!");

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Prisma"));`,
      },
      {
        title: "Hello World in Python",
        language: "Python",
        code: `print("Hello, World!")

def greet(name):
    return f"Hello, {name}!"

print(greet("Prisma"))`,
      },
      {
        title: "Hello World in Java",
        language: "Java",
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
