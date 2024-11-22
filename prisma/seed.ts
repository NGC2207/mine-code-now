import prisma from "@/lib/prisma";

async function main() {
  await prisma.snippet.createMany({
    data: [
      {
        title: "Plaintext",
        language: "plaintext",
        code: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus aliquet sapien, sed rhoncus leo ullamcorper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus feugiat eleifend nisl, aliquet rhoncus quam scelerisque vel. Morbi eu pellentesque ex. Nam suscipit maximus leo blandit cursus. Aenean sollicitudin nisi luctus, ornare nibh viverra, laoreet ex. Donec eget nibh sit amet dolor ornare elementum. Morbi sollicitudin enim vitae risus pretium vestibulum. Ut pretium hendrerit libero, non vulputate ante volutpat et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam malesuada turpis vitae est porttitor, id tincidunt neque dignissim. Integer rhoncus vestibulum justo in iaculis. Praesent nec augue ut dui scelerisque gravida vel id velit. Donec vehicula feugiat mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Praesent diam lorem, luctus quis ullamcorper non, consequat quis orci. Ut vel massa vel nunc sagittis porttitor a vitae ante. Quisque euismod lobortis imperdiet. Vestibulum tincidunt vehicula posuere. Nulla facilisi. Donec sodales imperdiet risus id ullamcorper. Nulla luctus orci tortor, vitae tincidunt urna aliquet nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat dapibus massa. Sed ac pharetra magna, in imperdiet neque. Nullam nunc nisi, consequat vel nunc et, sagittis aliquam arcu. Aliquam non orci magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id sem ut sem pulvinar rhoncus. Aenean venenatis nunc eget mi ornare, vitae maximus lacus varius. Quisque quis vestibulum justo.

Donec euismod luctus volutpat. Donec sed lacinia enim. Vivamus aliquam elit cursus, convallis diam at, volutpat turpis. Sed lacinia nisl in auctor dapibus. Nunc turpis mi, mattis ut rhoncus id, lacinia sed lectus. Donec sodales tellus quis libero gravida pretium et quis magna. Etiam ultricies mollis purus, eget consequat velit. Duis vitae nibh vitae arcu tincidunt congue. Maecenas ut velit in ipsum condimentum dictum quis eget urna. Sed mattis nulla arcu, vitae mattis ligula dictum at.

Praesent at dignissim dolor. Donec quis placerat sem. Cras vitae placerat sapien, eu sagittis ex. Mauris nec luctus risus. Cras imperdiet semper neque suscipit auctor. Mauris nisl massa, commodo sit amet dignissim id, malesuada sed ante. Praesent varius sapien eget eros vehicula porttitor.

Mauris auctor nunc in quam tempor, eget consectetur nisi rhoncus. Donec et nulla imperdiet, gravida dui at, accumsan velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sollicitudin condimentum auctor. Sed lacinia eleifend nisi, id scelerisque leo laoreet sit amet. Morbi congue augue a malesuada pulvinar. Curabitur nec ante finibus, commodo orci vel, aliquam libero. Morbi molestie purus non nunc placerat fermentum. Pellentesque commodo ligula sed pretium aliquam. Praesent ut nibh ex. Vivamus vestibulum velit in leo suscipit, vitae pellentesque urna vulputate. Suspendisse pretium placerat ligula eu ullamcorper. Nam eleifend mi tellus, ut tristique ante ultricies vitae. Quisque venenatis dapibus tellus sit amet mattis. Donec erat arcu, elementum vel nisl at, sagittis vulputate nisi.`,
      },
      {
        title: "C",
        language: "c",
        code: `// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full
// license information.

/*
 *	COMMAND LINE: -Ox -Gz -YX -UPROTOTYPES_REQUIRED
 */

#pragma warning(disable : 4532)
#pragma warning(disable : 4702)

#if defined(_WIN32)

#if defined(_M_SH)
#define WIN_CE
#endif

#if defined(_M_AMD64)
#define NEST_IN_FINALLY /* allow when __try nested in __finally OK */
#endif

#define NTSTATUS LONG
#define EXCEPTION_NESTED_CALL 0x10
#define RtlRaiseStatus(x) RaiseException((x), 0, 0, NULL)
#define RtlRaiseException(x)                                                   \
  RaiseException((x)->ExceptionCode, (x)->ExceptionFlags,                      \
                 (x)->NumberParameters, (x)->ExceptionInformation)
#define IN
#define OUT
#if !(defined(_M_IA64) || defined(_M_ALPHA) || defined(_M_PPC) ||              \
      defined(_M_AMD64) || defined(_M_ARM) || defined(_M_ARM64))
#define i386 1
#endif
#define try __try
#define except __except
#define finally __finally
#define leave __leave

#endif

#define WIN32_LEAN_AND_MEAN

#include "stdio.h"
#if defined(_M_IA64) || defined(_M_ALPHA) || defined(_M_PPC) ||                \
    defined(_M_AMD64) || defined(_M_ARM) || defined(_M_ARM64)
#include "setjmpex.h"
#else
#include "setjmp.h"
#endif
#include "float.h"
#include "windows.h"
#include "math.h"

#if !defined(STATUS_SUCCESS)
#define STATUS_SUCCESS 0
#endif
#if !defined(STATUS_UNSUCCESSFUL)
#define STATUS_UNSUCCESSFUL ((NTSTATUS)0xC0000001L)
#endif

//
// Define switch constants.
//

#define BLUE 0
#define RED 1

//
// Define function prototypes.
//

VOID addtwo(IN LONG First, IN LONG Second, IN PLONG Place);

VOID bar1(IN NTSTATUS Status, IN PLONG Counter);

VOID bar2(IN PLONG BlackHole, IN PLONG BadAddress, IN PLONG Counter);

VOID dojump(IN jmp_buf JumpBuffer, IN PLONG Counter);

LONG Echo(IN LONG Value);

#if !defined(WIN_CE) // return through finally not allowed on WinCE
VOID eret(IN NTSTATUS Status, IN PLONG Counter);
#endif

VOID except1(IN PLONG Counter);

ULONG
except2(IN PEXCEPTION_POINTERS ExceptionPointers, IN PLONG Counter);

ULONG
except3(IN PEXCEPTION_POINTERS ExceptionPointers, IN PLONG Counter);

VOID foo1(IN NTSTATUS Status);

VOID foo2(IN PLONG BlackHole, IN PLONG BadAddress);

#if !defined(WIN_CE) // return from finally not allowed on WinCE
VOID fret(IN PLONG Counter);
#endif

BOOLEAN
Tkm(VOID);

VOID Test61Part2(IN OUT PULONG Counter);

double SquareDouble(IN double op);

DECLSPEC_NOINLINE
ULONG
PgFilter(VOID)

{

  printf("filter entered...");
  return EXCEPTION_EXECUTE_HANDLER;
}

#pragma warning(push)
#pragma warning(disable : 4532)

VOID PgTest69(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      *Fault += 1;
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 1) {
          *State += 1;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 1) == 1) ? PgFilter() : EXCEPTION_CONTINUE_SEARCH) {
    if (*State != 2) {
      *Fault += 1;
    }
  }

  return;
}

VOID PgTest70(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      *Fault += 1;
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 2) {
          PgFilter();
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 2) == 2) ? EXCEPTION_EXECUTE_HANDLER
                              : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest71(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        *Fault += 1;
      }
      finally {
        if (AbnormalTermination()) {
          if (*State == 3) {
            *State += 3;
            return;

          } else {
            *Fault += 1;
          }
        }
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 6) {
          *State += 3;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 3) == 3) ? PgFilter() : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest72(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        *Fault += 1;
      }
      finally {
        if (AbnormalTermination()) {
          if (*State == 4) {
            *State += 4;
            return;

          } else {
            *Fault += 1;
          }
        }
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 8) {
          *State += 4;
          PgFilter();

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 4) == 4) ? EXCEPTION_EXECUTE_HANDLER
                              : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest73(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        *Fault += 1;
      }
      finally {
        if (AbnormalTermination()) {
          if (*State == 5) {
            *State += 5;

          } else {
            *Fault += 1;
          }
        }
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 10) {
          *State += 5;
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 5) == 5) ? PgFilter() : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest74(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        *Fault += 1;
      }
      finally {
        if (AbnormalTermination()) {
          if (*State == 6) {
            *State += 6;

          } else {
            *Fault += 1;
          }
        }
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 12) {
          *State += 6;
          PgFilter();
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 6) == 6) ? EXCEPTION_EXECUTE_HANDLER
                              : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest75(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        try {
          *Fault += 1;
        }
        finally {
          if (AbnormalTermination()) {
            if (*State == 7) {
              *State += 7;
              *Fault += 1;

            } else {
              *State += 10;
            }
          }
        }
      }
      except(((*State += 7) == 7) ? EXCEPTION_EXECUTE_HANDLER
                                  : EXCEPTION_CONTINUE_SEARCH) {
        *Fault += 1;
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 28) {
          *State += 7;
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 7) == 28) ? PgFilter() : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest76(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        try {
          *Fault += 1;
        }
        finally {
          if (AbnormalTermination()) {
            if (*State == 8) {
              *State += 8;
              *Fault += 1;

            } else {
              *State += 10;
            }
          }
        }
      }
      except(((*State += 8) == 8) ? EXCEPTION_EXECUTE_HANDLER
                                  : EXCEPTION_CONTINUE_SEARCH) {
        *Fault += 1;
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 32) {
          *State += 8;
          PgFilter();
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 8) == 32) ? EXCEPTION_EXECUTE_HANDLER
                               : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest77(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        try {
          *Fault += 1;
        }
        finally {
          if (AbnormalTermination()) {
            if (*State == 9) {
              *State += 9;
              *Fault += 1;

            } else {
              *State += 10;
            }
          }
        }
      }
      except(((*State += 9) == 9) ? PgFilter() : EXCEPTION_CONTINUE_SEARCH) {
        *Fault += 1;
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 36) {
          *State += 9;
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 9) == 36) ? EXCEPTION_EXECUTE_HANDLER
                               : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

VOID PgTest78(IN PLONG State, IN PLONG Fault)

{

  try {
    try {
      try {
        try {
          *Fault += 1;
        }
        finally {
          if (AbnormalTermination()) {
            if (*State == 10) {
              *State += 10;
              PgFilter();
              *Fault += 1;

            } else {
              *State += 10;
            }
          }
        }
      }
      except(((*State += 10) == 10) ? EXCEPTION_EXECUTE_HANDLER
                                    : EXCEPTION_CONTINUE_SEARCH) {
        *Fault += 1;
      }
    }
    finally {
      if (AbnormalTermination()) {
        if (*State == 40) {
          *State += 10;
          return;

        } else {
          *Fault += 1;
        }
      }
    }
  }
  except(((*State += 10) == 40) ? EXCEPTION_EXECUTE_HANDLER
                                : EXCEPTION_CONTINUE_SEARCH) {
    *Fault += 1;
  }

  return;
}

#pragma warning(pop)

VOID Test79(PLONG Counter, PLONG Fault)

{

  try {
    try {
      try {
        *Fault += 1;
      }
      finally {
        printf("finally 1...");
        *Fault += 1;
      }
    }
    finally { printf("finally 2..."); }
  }
  except(*Counter += 1, printf("filter 1..."), EXCEPTION_CONTINUE_SEARCH) {}

  return;
}

ULONG G;

ULONG
Test80(VOID)

{

  G = 1;
  try {
    while (G) {
      try {
        if (G == 10) {
          return 1;
        }

        if (G == 1) {
          continue;
        }
      }
      finally { G = 0; }
    }
  }
  finally { G = 10; }

  return 0;
}

void Test81(int *pCounter) {
  volatile char *AvPtr = NULL;

  __try {
    __try { *AvPtr = '\0'; }
    __except(EXCEPTION_EXECUTE_HANDLER) { __leave; }
  }
  __finally {
    printf("in finally ");
    *pCounter += 1;
  }
  return;
}

DECLSPEC_NOINLINE
VOID Test82Foo(VOID)

{
  *(volatile int *)0 = 0;
}

VOID Test82(__inout PLONG Counter)

{

  int retval = 1;

  __try {
    __try { Test82Foo(); }
    __finally {
      switch (*Counter) {
      case 0:
        printf("something failed!\n");
        retval = 6;
        break;

      case 1:
        retval = 0;
        break;

      case 2:
        printf("how did you get here?\n");
        retval = 2;
        break;

      case 3:
        printf("what?!?\n");
        retval = 3;
        break;

      case 4:
        printf("not correct\n");
        retval = 4;
        break;

      case 5:
        printf("error!\n");
        retval = 5;
        break;
      }
    }
  }
  __except(1){}

  *Counter = retval;
  return;
}

LONG Test83(VOID)

{

  G = 1;
  try {
    try {
      while (G) {
        try {
          if (G == 10) {
            return 1;
          }

          if (G == 1) {
            continue;
          }
        }
        finally { G = 0; }
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { leave; }
  }
  finally { G = 10; }

  return 0;
}

DECLSPEC_NOINLINE
VOID Test84(_Inout_ PLONG Counter)

{
  volatile int *Fault = 0;

  try {
    try {
      *Fault += 1;
    }
    except(EXCEPTION_EXECUTE_HANDLER) {
      try {
        return;
      }
      finally { *Counter += 1; }
    }
  }
  finally {

    if (AbnormalTermination()) {
      *Counter += 1;
    }
  }

  return;
}

DECLSPEC_NOINLINE
LONG Test85(_Inout_ PLONG Counter)

{
  volatile int *Fault = 0;

  G = 1;
  try {
    try {
      try {
        while (G) {
          try {
            try {
              if (G == 10) {
                return 1;
              }
              try {
                *Counter += 1;
              }
              except(EXCEPTION_EXECUTE_HANDLER) {}

              if (G == 1) {
                continue;
              }
            }
            finally {
              G = 0;
              *Counter += 1;
              *Fault += 1;
            }
          }
          except(EXCEPTION_EXECUTE_HANDLER) {
            *Counter += 1;
            leave;
          }
        }
      }
      finally {
        G = 10;
        *Counter += 1;
        *Fault += 1;
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { *Counter += 1; }
    *Counter += 1;
  }
  finally { *Counter += 1; }
  return 1;
}

DECLSPEC_NOINLINE
VOID Test86(_Inout_ PLONG Counter)

{
  volatile int *Fault = 0;

  try {
    try {
      try {
        try {
          try {
            try {
              *Fault += 1;
            }
            except(printf("Filter1 %d..", *Counter),
                   EXCEPTION_EXECUTE_HANDLER) {
              try {
                printf("Handler1 %d..", *Counter);
                return;
              }
              finally {
                printf("Finally1 %d..", *Counter);
                *Counter += 1;
              }
            }
          }
          finally {
            printf("Finally2 %d..", *Counter);
            *Counter += 1;
          }
        }
        except(EXCEPTION_EXECUTE_HANDLER) { leave; }
      }
      finally { *Counter += 1; }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { leave; }
  }
  finally { *Counter += 1; }

  return;
}

VOID Test87(_Inout_ PLONG Counter)

/*++

Routine Description:

    This function verifies the behavior of nested exception dispatching.

Arguments:

    Counter - Supplies a pointer to the state counter.

Return Value:
    None.

--*/

{
  volatile int *Fault = 0;

//
// N.B.  Disabled on x86 due to failing test case with handling of returns
//       in nested termination handlers on x86.
//
//       Disabled on ARM due to failing test case with handling of abutting
//       termination handlers within an except handler.
//
//       Disabled on AMD64 due to failing test case with handling of
//       abutting termination handlers within an except handler when a
//       non-local goto is involved.
//

#if !defined(_X86_)
  try {
    try {
      try {
        try {
          try {
            *Fault += 1;

            try {
            }
            finally {
              if (AbnormalTermination()) {
                *Fault += 1;
              }
            }
          }
          finally {

            if (AbnormalTermination()) {
              if ((*Counter += 13) == 26) {
                return;

              } else {
                *Fault += 1;
              }
            }
          }
        }
        finally {
          if (AbnormalTermination()) {
            *Counter += 13;
            *Fault += 1;
          }
        }
      }
      except(((*Counter += 13) == 13) ? EXCEPTION_EXECUTE_HANDLER
                                      : EXCEPTION_CONTINUE_SEARCH) {
        *Fault += 1;
      }
    }
    except(((*Counter += 13) == 65) ? EXCEPTION_EXECUTE_HANDLER
                                    : EXCEPTION_CONTINUE_SEARCH) {
      try {
        *Counter += 13;
        return;
      }
      finally {
        if (AbnormalTermination()) {
          *Counter += 13;
          goto Finish;
        }
      }
    }
  }
  finally {

    if (AbnormalTermination()) {
      if ((*Counter += 13) == 104) {
        goto Finish;
      }
    }
  }

Finish:
#else
  *Counter = 104;
#endif

  return;
}

VOID Test88(_Inout_ PLONG Counter)

{
  volatile int *Fault = 0;

  try {
    try {
      try {
        try {
          try {
            try {
              try {
                try {
                  *Fault += 1;
                }
                except(((*Counter += 1) == 1) ? *Fault
                                              : EXCEPTION_CONTINUE_SEARCH) {}
              }
              except(*Counter += 1, EXCEPTION_EXECUTE_HANDLER) { *Fault += 2; }
            }
            except(*Counter += 1, EXCEPTION_CONTINUE_SEARCH) { leave; }
          }
          except(*Counter += 1, EXCEPTION_CONTINUE_SEARCH) { leave; }
        }
        except(EXCEPTION_EXECUTE_HANDLER) {}
      }
      except(EXCEPTION_EXECUTE_HANDLER) {}
    }
    except(EXCEPTION_EXECUTE_HANDLER) { leave; }
  }
  finally { *Counter += 1; }
}

int main(int argc, char *argv[])

{

  PLONG BadAddress;
  PCHAR BadByte;
  PLONG BlackHole;
  ULONG Index1;
  ULONG Index2 = RED;
  jmp_buf JumpBuffer;
  LONG Counter;
  EXCEPTION_RECORD ExceptionRecord;
  double doubleresult;

  //
  // Announce start of exception test.
  //

  printf("Start of exception test\n");

  //
  // Initialize exception record.
  //

  ExceptionRecord.ExceptionCode = STATUS_INTEGER_OVERFLOW;
  ExceptionRecord.ExceptionFlags = 0;
  ExceptionRecord.ExceptionRecord = NULL;
  ExceptionRecord.NumberParameters = 0;

  //
  // Initialize pointers.
  //

  BadAddress = (PLONG)NULL;
  BadByte = (PCHAR)NULL;
  BadByte += 1;
  BlackHole = &Counter;

  //
  // Simply try statement with a finally clause that is entered sequentially.
  //

  printf("    test1...");
  Counter = 0;
  try {
    Counter += 1;
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 1;
    }
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try statement with an exception clause that is never executed
  // because there is no exception raised in the try clause.
  //

  printf("    test2...");
  Counter = 0;
  try {
    Counter += 1;
  }
  except(Counter) { Counter += 1; }

  if (Counter != 1) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try statement with an exception handler that is never executed
  // because the exception expression continues execution.
  //

  printf("    test3...");
  Counter = 0;
  try {
    Counter -= 1;
    RtlRaiseException(&ExceptionRecord);
  }
  except(Counter) { Counter -= 1; }

  if (Counter != -1) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try statement with an exception clause that is always executed.
  //

  printf("    test4...");
  Counter = 0;
  try {
    Counter += 1;
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  except(Counter) { Counter += 1; }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try statement with an exception clause that is always executed.
  //

  printf("    test5...");
  Counter = 0;
  try {
    Counter += 1;
    *BlackHole += *BadAddress;
  }
  except(Counter) { Counter += 1; }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simply try statement with a finally clause that is entered as the
  // result of an exception.
  //

  printf("    test6...");
  Counter = 0;
  try {
    try {
      Counter += 1;
      RtlRaiseException(&ExceptionRecord);
    }
    finally {
      if (abnormal_termination() != FALSE) {
        Counter += 1;
      }
    }
  }
  except(Counter) {
    if (Counter == 2) {
      Counter += 1;
    }
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simply try statement with a finally clause that is entered as the
  // result of an exception.
  //

  printf("    test7...");
  Counter = 0;
  try {
    try {
      Counter += 1;
      *BlackHole += *BadAddress;
    }
    finally {
      if (abnormal_termination() != FALSE) {
        Counter += 1;
      }
    }
  }
  except(Counter) {
    if (Counter == 2) {
      Counter += 1;
    }
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try that calls a function which raises an exception.
  //

  printf("    test8...");
  Counter = 0;
  try {
    Counter += 1;
    foo1(STATUS_ACCESS_VIOLATION);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try that calls a function which raises an exception.
  //

  printf("    test9...");
  Counter = 0;
  try {
    Counter += 1;
    foo2(BlackHole, BadAddress);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try that calls a function which calls a function that
  // raises an exception. The first function has a finally clause
  // that must be executed for this test to work.
  //

  printf("    test10...");
  Counter = 0;
  try {
    bar1(STATUS_ACCESS_VIOLATION, &Counter);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter -= 1;
  }

  if (Counter != 98) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try that calls a function which calls a function that
  // raises an exception. The first function has a finally clause
  // that must be executed for this test to work.
  //

  printf("    test11...");
  Counter = 0;
  try {
    bar2(BlackHole, BadAddress, &Counter);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter -= 1;
  }

  if (Counter != 98) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try within an except
  //

  printf("    test12...");
  Counter = 0;
  try {
    foo1(STATUS_ACCESS_VIOLATION);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
    try {
      foo1(STATUS_SUCCESS);
    }
    except((GetExceptionCode() == STATUS_SUCCESS) ? EXCEPTION_EXECUTE_HANDLER
                                                  : EXCEPTION_CONTINUE_SEARCH) {
      if (Counter != 1) {
        printf("failed, count = %d\n", Counter);

      } else {
        printf("succeeded...");
      }

      Counter += 1;
    }
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try within an except
  //

  printf("    test13...");
  Counter = 0;
  try {
    foo2(BlackHole, BadAddress);
  }
  except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
    try {
      foo1(STATUS_SUCCESS);
    }
    except((GetExceptionCode() == STATUS_SUCCESS) ? EXCEPTION_EXECUTE_HANDLER
                                                  : EXCEPTION_CONTINUE_SEARCH) {
      if (Counter != 1) {
        printf("failed, count = %d\n", Counter);

      } else {
        printf("succeeded...");
      }

      Counter += 1;
    }
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from except/finally not allowed on WinCE
  //
  // A goto from an exception clause that needs to pass
  // through a finally
  //

  printf("    test14...");
  Counter = 0;
  try {
    try {
      foo1(STATUS_ACCESS_VIOLATION);
    }
    except((GetExceptionCode() == STATUS_ACCESS_VIOLATION)
               ? EXCEPTION_EXECUTE_HANDLER
               : EXCEPTION_CONTINUE_SEARCH) {
      Counter += 1;
      goto t9;
    }
  }
  finally { Counter += 1; }

t9:
  ;
  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A goto from an finally clause that needs to pass
  // through a finally
  //

  printf("    test15...");
  Counter = 0;
  try {
    try {
      Counter += 1;
    }
    finally {
      Counter += 1;
      goto t10;
    }
  }
  finally { Counter += 1; }

t10:
  ;
  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A goto from an exception clause that needs to pass
  // through a finally into the outer finally clause.
  //

  printf("    test16...");
  Counter = 0;
  try {
    try {
      try {
        Counter += 1;
        foo1(STATUS_INTEGER_OVERFLOW);
      }
      except(EXCEPTION_EXECUTE_HANDLER) {
        Counter += 1;
        goto t11;
      }
    }
    finally { Counter += 1; }
  t11:
    ;
  }
  finally { Counter += 1; }

  if (Counter != 4) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A goto from an finally clause that needs to pass
  // through a finally into the outer finally clause.
  //

  printf("    test17...");
  Counter = 0;
  try {
    try {
      Counter += 1;
    }
    finally {
      Counter += 1;
      goto t12;
    }
  t12:
    ;
  }
  finally { Counter += 1; }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A return from an except clause
  //

  printf("    test18...");
  Counter = 0;
  try {
    Counter += 1;
    eret(STATUS_ACCESS_VIOLATION, &Counter);
  }
  finally { Counter += 1; }

  if (Counter != 4) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A return from a finally clause
  //

  printf("    test19...");
  Counter = 0;
  try {
    Counter += 1;
    fret(&Counter);
  }
  finally { Counter += 1; }

  if (Counter != 5) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // A simple set jump followed by a long jump.
  //

  printf("    test20...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    Counter += 1;
    longjmp(JumpBuffer, 1);

  } else {
    Counter += 1;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump followed by a long jump out of a finally clause that is
  // sequentially executed.
  //

  printf("    test21...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    try {
      Counter += 1;
    }
    finally {
      Counter += 1;
      longjmp(JumpBuffer, 1);
    }

  } else {
    Counter += 1;
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump within a try clause followed by a long jump out of a
  // finally clause that is sequentially executed.
  //

  printf("    test22...");
  Counter = 0;
  try {
    if (setjmp(JumpBuffer) == 0) {
      Counter += 1;

    } else {
      Counter += 1;
    }
  }
  finally {
    Counter += 1;
    if (Counter == 2) {
      Counter += 1;
      longjmp(JumpBuffer, 1);
    }
  }

  if (Counter != 5) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump followed by a try/except, followed by a try/finally where
  // the try body of the try/finally raises an exception that is handled
  // by the try/excecpt which causes the try/finally to do a long jump out
  // of a finally clause. This will create a collided unwind.
  //

  printf("    test23...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    try {
      try {
        Counter += 1;
        RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
      }
      finally {
        Counter += 1;
        longjmp(JumpBuffer, 1);
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 1; }

  } else {
    Counter += 1;
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump followed by a try/except, followed by a several nested
  // try/finally's where the inner try body of the try/finally raises an
  // exception that is handled by the try/except which causes the
  // try/finally to do a long jump out of a finally clause. This will
  // create a collided unwind.
  //

  printf("    test24...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    try {
      try {
        try {
          try {
            Counter += 1;
            RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
          }
          finally { Counter += 1; }
        }
        finally {
          Counter += 1;
          longjmp(JumpBuffer, 1);
        }
      }
      finally { Counter += 1; }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 1; }

  } else {
    Counter += 1;
  }

  if (Counter != 5) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump followed by a try/except, followed by a try/finally which
  // calls a subroutine which contains a try finally that raises an
  // exception that is handled to the try/except.
  //

  printf("    test25...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    try {
      try {
        try {
          Counter += 1;
          dojump(JumpBuffer, &Counter);
        }
        finally { Counter += 1; }
      }
      finally { Counter += 1; }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 1; }

  } else {
    Counter += 1;
  }

  if (Counter != 7) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A set jump followed by a try/except, followed by a try/finally which
  // calls a subroutine which contains a try finally that raises an
  // exception that is handled to the try/except.
  //

  printf("    test26...");
  Counter = 0;
  if (setjmp(JumpBuffer) == 0) {
    try {
      try {
        try {
          try {
            Counter += 1;
            dojump(JumpBuffer, &Counter);
          }
          finally { Counter += 1; }
        }
        finally {
          Counter += 1;
          longjmp(JumpBuffer, 1);
        }
      }
      finally { Counter += 1; }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 1; }

  } else {
    Counter += 1;
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Test nested exceptions.
  //

  printf("    test27...");
  Counter = 0;
  try {
    try {
      Counter += 1;
      except1(&Counter);
    }
    except(except2(GetExceptionInformation(), &Counter)) { Counter += 2; }
  }
  except(EXCEPTION_EXECUTE_HANDLER) { Counter += 3; }

  if (Counter != 55) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Simple try that causes an integer overflow exception.
  //

  printf("    test28...");
  Counter = 0;
  try {
    Counter += 1;
    addtwo(0x7fff0000, 0x10000, &Counter);
  }
  except((GetExceptionCode() == STATUS_INTEGER_OVERFLOW)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

//
// Simple try that raises an misaligned data exception.
//
#if !defined(i386) && !defined(_M_IA64) && !defined(_M_AMD64) &&               \
    !defined(_M_ARM) && !defined(_M_ARM64)
  printf("    test29...");
  Counter = 0;
  try {
    Counter += 1;
    foo2(BlackHole, (PLONG)BadByte);
  }
  except((GetExceptionCode() == STATUS_DATATYPE_MISALIGNMENT)
             ? EXCEPTION_EXECUTE_HANDLER
             : EXCEPTION_CONTINUE_SEARCH) {
    Counter += 1;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#endif
  //
  // Continue from a try body with an exception clause in a loop.
  //

  printf("    test30...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 0) {
        continue;

      } else {
        Counter += 1;
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 40; }

    Counter += 2;
  }

  if (Counter != 15) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Continue from a try body with an finally clause in a loop.
  //

  printf("    test31...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 0) {
        continue;

      } else {
        Counter += 1;
      }
    }
    finally { Counter += 2; }

    Counter += 3;
  }

  if (Counter != 40) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Continue from doubly nested try body with an exception clause in a
  // loop.
  //

  printf("    test32...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 0) {
          continue;

        } else {
          Counter += 1;
        }
      }
      except(EXCEPTION_EXECUTE_HANDLER) { Counter += 10; }

      Counter += 2;
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 20; }

    Counter += 3;
  }

  if (Counter != 30) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Continue from doubly nested try body with an finally clause in a loop.
  //

  printf("    test33...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 0) {
          continue;

        } else {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 3;
    }
    finally { Counter += 4; }

    Counter += 5;
  }

  if (Counter != 105) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Continue from a finally clause in a loop.
  //

  printf("    test34...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 0) {
        Counter += 1;
      }
    }
    finally {
      Counter += 2;
      continue;
    }

    Counter += 4;
  }

  if (Counter != 25) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Continue from a doubly nested finally clause in a loop.
  //

  printf("    test35...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 0) {
          Counter += 1;
        }
      }
      finally {
        Counter += 2;
        continue;
      }

      Counter += 4;
    }
    finally { Counter += 5; }

    Counter += 6;
  }

  if (Counter != 75) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Continue from a doubly nested finally clause in a loop.
  //

  printf("    test36...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 0) {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 4;
    }
    finally {
      Counter += 5;
      continue;
    }

    Counter += 6;
  }

  if (Counter != 115) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Break from a try body with an exception clause in a loop.
  //

  printf("    test37...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 1) {
        break;

      } else {
        Counter += 1;
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 40; }

    Counter += 2;
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Break from a try body with an finally clause in a loop.
  //

  printf("    test38...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 1) {
        break;

      } else {
        Counter += 1;
      }
    }
    finally { Counter += 2; }

    Counter += 3;
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Break from doubly nested try body with an exception clause in a
  // loop.
  //

  printf("    test39...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          break;

        } else {
          Counter += 1;
        }
      }
      except(EXCEPTION_EXECUTE_HANDLER) { Counter += 10; }

      Counter += 2;
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 20; }

    Counter += 3;
  }

  if (Counter != 6) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Break from doubly nested try body with an finally clause in a loop.
  //

  printf("    test40...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          break;

        } else {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 3;
    }
    finally { Counter += 4; }

    Counter += 5;
  }

  if (Counter != 21) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a finally clause in a loop.
  //

  printf("    test41...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      if ((Index1 & 0x1) == 1) {
        Counter += 1;
      }
    }
    finally {
      Counter += 2;
      break;
    }

    Counter += 4;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a doubly nested finally clause in a loop.
  //

  printf("    test42...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          Counter += 1;
        }
      }
      finally {
        Counter += 2;
        break;
      }

      Counter += 4;
    }
    finally { Counter += 5; }

    Counter += 6;
  }

  if (Counter != 7) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a doubly nested finally clause in a loop.
  //

  printf("    test43...");
  Counter = 0;
  for (Index1 = 0; Index1 < 10; Index1 += 1) {
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 4;
    }
    finally {
      Counter += 5;
      break;
    }

    Counter += 6;
  }

  if (Counter != 11) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Break from a try body with an exception clause in a switch.
  //

  printf("    test44...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      if ((Index1 & 0x1) == 1) {
        break;

      } else {
        Counter += 1;
      }
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 40; }

    Counter += 2;
    break;
  }

  if (Counter != 0) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Break from a try body with an finally clause in a switch.
  //

  printf("    test45...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      if ((Index1 & 0x1) == 1) {
        break;

      } else {
        Counter += 1;
      }
    }
    finally { Counter += 2; }

    Counter += 3;
  }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Break from doubly nested try body with an exception clause in a
  // switch.
  //

  printf("    test46...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          break;

        } else {
          Counter += 1;
        }
      }
      except(EXCEPTION_EXECUTE_HANDLER) { Counter += 10; }

      Counter += 2;
    }
    except(EXCEPTION_EXECUTE_HANDLER) { Counter += 20; }

    Counter += 3;
  }

  if (Counter != 0) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // gotos from try/finally not allowed on WinCE
  //
  // Break from doubly nested try body with an finally clause in a switch.
  //

  printf("    test47...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          break;

        } else {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 3;
    }
    finally { Counter += 4; }

    Counter += 5;
  }

  if (Counter != 6) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a finally clause in a switch.
  //

  printf("    test48...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      if ((Index1 & 0x1) == 1) {
        Counter += 1;
      }
    }
    finally {
      Counter += 2;
      break;
    }

    Counter += 4;
  }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a doubly nested finally clause in a switch.
  //

  printf("    test49...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          Counter += 1;
        }
      }
      finally {
        Counter += 2;
        break;
      }

      Counter += 4;
    }
    finally { Counter += 5; }

    Counter += 6;
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Break from a doubly nested finally clause in a switch.
  //

  printf("    test50...");
  Counter = 0;
  Index1 = 1;
  switch (Index2) {
  case BLUE:
    Counter += 100;
    break;

  case RED:
    try {
      try {
        if ((Index1 & 0x1) == 1) {
          Counter += 1;
        }
      }
      finally { Counter += 2; }

      Counter += 4;
    }
    finally {
      Counter += 5;
      break;
    }

    Counter += 6;
  }

  if (Counter != 12) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Leave from an if in a simple try/finally.
  //

  printf("    test51...");
  Counter = 0;
  try {
    if (Echo(Counter) == Counter) {
      Counter += 3;
      leave;

    } else {
      Counter += 100;
    }
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 5;
    }
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Leave from a loop in a simple try/finally.
  //

  printf("    test52...");
  Counter = 0;
  try {
    for (Index1 = 0; Index1 < 10; Index1 += 1) {
      if (Echo(Index1) == Index1) {
        Counter += 3;
        leave;
      }

      Counter += 100;
    }
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 5;
    }
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Leave from a switch in a simple try/finally.
  //

  printf("    test53...");
  Counter = 0;
  try {
    switch (Index2) {
    case BLUE:
      break;

    case RED:
      Counter += 3;
      leave;
    }

    Counter += 100;
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 5;
    }
  }

  if (Counter != 8) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Leave from an if in doubly nested try/finally followed by a leave
  // from an if in the outer try/finally.
  //

  printf("    test54...");
  Counter = 0;
  try {
    try {
      if (Echo(Counter) == Counter) {
        Counter += 3;
        leave;

      } else {
        Counter += 100;
      }
    }
    finally {
      if (abnormal_termination() == FALSE) {
        Counter += 5;
      }
    }

    if (Echo(Counter) == Counter) {
      Counter += 3;
      leave;

    } else {
      Counter += 100;
    }
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 5;
    }
  }

  if (Counter != 16) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#if !defined(WIN_CE) // leave from finally not allowed on WinCE
  //
  // Leave from an if in doubly nested try/finally followed by a leave
  // from the finally of the outer try/finally.
  //

  printf("    test55...");
  Counter = 0;
  try {
    try {
      if (Echo(Counter) == Counter) {
        Counter += 3;
        leave;

      } else {
        Counter += 100;
      }
    }
    finally {
      if (abnormal_termination() == FALSE) {
        Counter += 5;
        leave;
      }
    }

    Counter += 100;
  }
  finally {
    if (abnormal_termination() == FALSE) {
      Counter += 5;
    }
  }

  if (Counter != 13) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif

  //
  // Try/finally within the except clause of a try/except that is always
  // executed.
  //

  printf("    test56...");
  Counter = 0;
  try {
    Counter += 1;
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  except(Counter) {
    try {
      Counter += 3;
    }
    finally {
      if (abnormal_termination() == FALSE) {
        Counter += 5;
      }
    }
  }

  if (Counter != 9) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Try/finally within the finally clause of a try/finally.
  //

  printf("    test57...");
  Counter = 0;
  try {
    Counter += 1;
  }
  finally {
    if (abnormal_termination() == FALSE) {
      try {
        Counter += 3;
      }
      finally {
        if (abnormal_termination() == FALSE) {
          Counter += 5;
        }
      }
    }
  }

  if (Counter != 9) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Try/except within the finally clause of a try/finally.
  //

  printf("    test58...");
#if !defined(NEST_IN_FINALLY)
  printf("skipped\n");
#else
  Counter = 0;
  try {
    Counter -= 1;
  }
  finally {
    try {
      Counter += 2;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    except(Counter) {
      try {
        Counter += 3;
      }
      finally {
        if (abnormal_termination() == FALSE) {
          Counter += 5;
        }
      }
    }
  }

  if (Counter != 9) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif /* def(NEST_IN_FINALLY) */

  //
  // Try/except within the except clause of a try/except that is always
  // executed.
  //

  printf("    test59...");
  Counter = 0;
  try {
    Counter += 1;
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  except(Counter) {
    try {
      Counter += 3;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    except(Counter - 3) { Counter += 5; }
  }

  if (Counter != 9) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Try with a Try which exits the scope with a goto
  //

  printf("    test60...");
  Counter = 0;
  try {
    try {
      goto outside;
    }
    except(1) { Counter += 1; }

  outside:
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  except(1) { Counter += 3; }

  if (Counter != 3) {
    printf("failed, count = %d\n", Counter);
  } else {
    printf("succeeded\n");
  }

  //
  // Try/except which gets an exception from a subfunction within
  // a try/finally which has a try/except in the finally clause
  //

  printf("    test61...");
#if !defined(NEST_IN_FINALLY)
  printf("skipped\n");
#else
  Counter = 0;
  try {
    Test61Part2(&Counter);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { Counter += 11; }

  if (Counter != 24) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }
#endif /* def(NEST_IN_FINALLY) */

  //
  // Check for precision of exception on floating point
  //

  printf("    test62...");

#if defined(i386) || defined(_M_IA64) || defined(_M_ALPHA) || defined(_M_AMD64)

/* enable floating point overflow */
#if defined(i386)
  _control87(_control87(0, 0) & ~EM_OVERFLOW, _MCW_EM);
#else
  //
  // use portable version of _control87
  //
  _controlfp(_controlfp(0, 0) & ~EM_OVERFLOW, _MCW_EM);
#endif

  Counter = 0;
  try {
    doubleresult = SquareDouble(1.7e300);

    try {
      doubleresult = SquareDouble(1.0);
    }
    except(1) { Counter += 3; }
  }
  except(1) { Counter += 1; }

  if (Counter != 1) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

/* clear up pending unmasked exceptions and restore FP control registers */
#if defined(i386)
  _clear87();
  _control87(_control87(0, 0) | EM_OVERFLOW, 0xfffff);
#else
  _clearfp();
  _controlfp(_controlfp(0, 0) | EM_OVERFLOW, 0xfffff);
#endif

#else
  printf("skipped\n");
#endif

  //
  // A try/finally inside a try/except where an exception is raised in the
  // try/finally.
  //

  printf("    test63...");
  Counter = 0;
  try {
    try {
      Counter += 1;
    }
    finally {
      Counter += 3;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
  }
  except(1) { Counter += 6; }

  if (Counter != 10) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try/finally inside a try/except where an exception is raised in the
  // in the try/except and the try/finally.
  //

  printf("    test64...");
  Counter = 0;
  try {
    try {
      Counter += 1;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    finally {
      Counter += 3;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
  }
  except(1) { Counter += 6; }

  if (Counter != 10) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try/finally inside a try/except where an exception is raised in the
  // try/finally.
  //

  printf("    test65...");
  Counter = 0;
  try {
    try {
      Counter += 1;
    }
    finally {
      Counter += 3;
      *BlackHole += *BadAddress;
      Counter += 13;
    }
  }
  except(1) { Counter += 6; }

  if (Counter != 10) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try/finally inside a try/except where an exception is raised in the
  // in the try/except and the try/finally.
  //

  printf("    test66...");
  Counter = 0;
  try {
    try {
      Counter += 1;
      *BlackHole += *BadAddress;
      Counter += 13;
    }
    finally {
      Counter += 3;
      *BlackHole += *BadAddress;
      Counter += 13;
    }
  }
  except(1) { Counter += 6; }

  if (Counter != 10) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try/finally inside a try/finally inside a try/except where an
  // exception is raised in the in the try/except and in try/finally.
  //

  printf("    test67...");
  try {
    try {
      *BlackHole += *BadAddress;
    }
    finally {
      try {
        Counter = 0;
      }
      finally {
        if (Counter != 0) {
          Counter += 1;
        }
      }

      Counter += 1;
      *BlackHole += *BadAddress;
    }
  }
  except(1) { Counter += 1; }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // A try/finally inside a try/finally inside a try/except where an
  // exception is raised in the in the try/except and in try/finally.
  //

  printf("    test68...");
  try {
    try {
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    finally {
      try {
        Counter = 0;
      }
      finally {
        if (Counter != 0) {
          Counter += 1;
        }
      }

      Counter += 1;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
  }
  except(1) { Counter += 1; }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

//
// Patch guard test 69.
//

#if defined(_AMD64_) || defined(_X86_)

  printf("    test69...");
  Counter = 0;
  try {
    PgTest69(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test70...");
  Counter = 0;
  try {
    PgTest70(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 2) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test71...");
  Counter = 0;
  try {
    PgTest71(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 9) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test72...");
  Counter = 0;
  try {
    PgTest72(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 12) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test73...");
  Counter = 0;
  try {
    PgTest73(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 15) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test74...");
  Counter = 0;
  try {
    PgTest74(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 18) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test75...");
  Counter = 0;
  try {
    PgTest75(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 35) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test76...");
  Counter = 0;
  try {
    PgTest76(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 40) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test77...");
  Counter = 0;
  try {
    PgTest77(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 45) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test78...");
  Counter = 0;
  try {
    PgTest78(&Counter, BadAddress);
  }
  except(EXCEPTION_EXECUTE_HANDLER) { printf("unexpected exception..."); }

  if (Counter != 50) {
    printf("failed, count = %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

#else
  printf("    test69...filter entered...succeeded\n");
  printf("    test70...filter entered...succeeded\n");
  printf("    test71...filter entered...succeeded\n");
  printf("    test72...filter entered...succeeded\n");
  printf("    test73...filter entered...succeeded\n");
  printf("    test74...filter entered...succeeded\n");
  printf("    test75...filter entered...succeeded\n");
  printf("    test76...filter entered...succeeded\n");
  printf("    test77...filter entered...succeeded\n");
  printf("    test78...filter entered...succeeded\n");
#endif

  if (LOBYTE(LOWORD(GetVersion())) < 6) {
    printf("    test79...");
    printf("filter 1...filter 2...finally 1...filter 1...filter 2...finally "
           "2...passed\n");
  } else {

    printf("    test79...");
    Counter = 0;
    try {
      Test79(&Counter, BadAddress);
    }
    except(printf("filter 2..."), EXCEPTION_EXECUTE_HANDLER) { Counter += 1; }

    if (Counter == 3) {
      printf("passed\n");

    } else {
      printf("failed  %d \n", Counter);
    }
  }

  printf("    test80...");
  if (Test80() != 0) {
    printf("failed\n");

  } else {
    printf("passed\n");
  }

  printf("    test81...");
  Counter = 0;
  Test81(&Counter);
  if (Counter != 1) {
    printf("failed  %d \n", Counter);

  } else {
    printf("passed\n");
  }

  printf("    test82...");
  Counter = 1;
  Test82(&Counter);
  if (Counter != 0) {
    printf("failed\n");

  } else {
    printf("succeeded\n");
  }

  printf("    test83...");
  if (Test83() != 0) {
    printf("failed\n");

  } else {
    printf("succeeded\n");
  }

  printf("    test84...");
  Counter = 0;
  Test84(&Counter);
  if (Counter != 2) {
    printf("failed\n");

  } else {
    printf("succeeded\n");
  }

  printf("    test85...");
  Counter = 0;
  Test85(&Counter);
  if (Counter != 7) {
    printf("failed\n");

  } else {
    printf("succeeded\n");
  }

  printf("    test86...");
  Counter = 0;
  Test86(&Counter);
  if (Counter != 4) {
    printf("failed %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test87...");
  Counter = 0;
  Test87(&Counter);
  if (Counter != 104) {
    printf("failed %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  printf("    test88...");
  Counter = 0;
  Test88(&Counter);
  if (Counter != 6) {
    printf("failed %d\n", Counter);

  } else {
    printf("succeeded\n");
  }

  //
  // Announce end of exception test.
  //

  printf("End of exception test\n");
  return;
}

#pragma optimize("a", off)
VOID addtwo(long First, long Second, long *Place)

{

  RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  *Place = First + Second;
  return;
}
#pragma optimize("", on)

VOID bar1(IN NTSTATUS Status, IN PLONG Counter) {

  try {
    foo1(Status);
  }
  finally {
    if (abnormal_termination() != FALSE) {
      *Counter = 99;

    } else {
      *Counter = 100;
    }
  }

  return;
}

VOID bar2(IN PLONG BlackHole, IN PLONG BadAddress, IN PLONG Counter) {

  try {
    foo2(BlackHole, BadAddress);
  }
  finally {
    if (abnormal_termination() != FALSE) {
      *Counter = 99;

    } else {
      *Counter = 100;
    }
  }

  return;
}

VOID dojump(IN jmp_buf JumpBuffer, IN PLONG Counter)

{

  try {
    try {
      *Counter += 1;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    finally { *Counter += 1; }
  }
  finally {
    *Counter += 1;
    longjmp(JumpBuffer, 1);
  }
}

#if !defined(WIN_CE) // return through finally not allowed on WinCE
VOID eret(IN NTSTATUS Status, IN PLONG Counter)

{

  try {
    try {
      foo1(Status);
    }
    except((GetExceptionCode() == Status) ? EXCEPTION_EXECUTE_HANDLER
                                          : EXCEPTION_CONTINUE_SEARCH) {
      *Counter += 1;
      return;
    }
  }
  finally { *Counter += 1; }

  return;
}
#endif

VOID except1(IN PLONG Counter)

{

  try {
    *Counter += 5;
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  except(except3(GetExceptionInformation(), Counter)) { *Counter += 7; }

  *Counter += 9;
  return;
}

ULONG
except2(IN PEXCEPTION_POINTERS ExceptionPointers, IN PLONG Counter)

{

  PEXCEPTION_RECORD ExceptionRecord;

  ExceptionRecord = ExceptionPointers->ExceptionRecord;
  if ((ExceptionRecord->ExceptionCode == STATUS_UNSUCCESSFUL) &&
      ((ExceptionRecord->ExceptionFlags & EXCEPTION_NESTED_CALL) == 0)) {
    *Counter += 11;
    return EXCEPTION_EXECUTE_HANDLER;

  } else {
    *Counter += 13;
    return EXCEPTION_CONTINUE_SEARCH;
  }
}

ULONG
except3(IN PEXCEPTION_POINTERS ExceptionPointers, IN PLONG Counter)

{

  PEXCEPTION_RECORD ExceptionRecord;

  ExceptionRecord = ExceptionPointers->ExceptionRecord;
  if ((ExceptionRecord->ExceptionCode == STATUS_INTEGER_OVERFLOW) &&
      ((ExceptionRecord->ExceptionFlags & EXCEPTION_NESTED_CALL) == 0)) {
    *Counter += 17;
    RtlRaiseStatus(STATUS_UNSUCCESSFUL);

  } else if ((ExceptionRecord->ExceptionCode == STATUS_UNSUCCESSFUL) &&
             ((ExceptionRecord->ExceptionFlags & EXCEPTION_NESTED_CALL) != 0)) {
    *Counter += 19;
    return EXCEPTION_CONTINUE_SEARCH;
  }

  *Counter += 23;
  return EXCEPTION_EXECUTE_HANDLER;
}

VOID foo1(IN NTSTATUS Status)

{

  //
  // Raise exception.
  //

  RtlRaiseStatus(Status);
  return;
}

VOID foo2(IN PLONG BlackHole, IN PLONG BadAddress)

{

  //
  // Raise exception.
  //

  *BlackHole += *BadAddress;
  return;
}

#if !defined(WIN_CE) // return from finally not allowed on WinCE
VOID fret(IN PLONG Counter)

{

  try {
    try {
      *Counter += 1;
    }
    finally {
      *Counter += 1;
      return;
    }
  }
  finally { *Counter += 1; }

  return;
}
#endif

LONG Echo(IN LONG Value)

{
  return Value;
}

#if defined(NEST_IN_FINALLY)
VOID Test61Part2(IN OUT PULONG Counter) {
  try {
    *Counter -= 1;
    RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
  }
  finally {
    try {
      *Counter += 2;
      RtlRaiseStatus(STATUS_INTEGER_OVERFLOW);
    }
    except(EXCEPTION_EXECUTE_HANDLER) { *Counter += 5; }
    *Counter += 7;
  }
}
#endif /* def(NEST_IN_FINALLY) */

double SquareDouble(IN double op) {
  return exp(2.0 * log(op));
}
`,
      },
      {
        title: "Cpp",
        language: "c",
        code: `#include "pch.h"
#include "Direct3DBase.h"

using namespace Microsoft::WRL;
using namespace Windows::UI::Core;
using namespace Windows::Foundation;

// Constructor.
Direct3DBase::Direct3DBase()
{
}

// Initialize the Direct3D resources required to run.
void Direct3DBase::Initialize(CoreWindow^ window)
{
    m_window = window;
    
    CreateDeviceResources();
    CreateWindowSizeDependentResources();
}

// These are the resources that depend on the device.
void Direct3DBase::CreateDeviceResources()
{
    // This flag adds support for surfaces with a different color channel ordering than the API default.
    // It is recommended usage, and is required for compatibility with Direct2D.
    UINT creationFlags = D3D11_CREATE_DEVICE_BGRA_SUPPORT;

#if defined(_DEBUG)
    // If the project is in a debug build, enable debugging via SDK Layers with this flag.
    creationFlags |= D3D11_CREATE_DEVICE_DEBUG;
#endif

    // This array defines the set of DirectX hardware feature levels this app will support.
    // Note the ordering should be preserved.
    // Don't forget to declare your application's minimum required feature level in its
    // description.  All applications are assumed to support 9.1 unless otherwise stated.
    D3D_FEATURE_LEVEL featureLevels[] = 
    {
        D3D_FEATURE_LEVEL_11_1,
        D3D_FEATURE_LEVEL_11_0,
        D3D_FEATURE_LEVEL_10_1,
        D3D_FEATURE_LEVEL_10_0,
        D3D_FEATURE_LEVEL_9_3,
        D3D_FEATURE_LEVEL_9_2,
        D3D_FEATURE_LEVEL_9_1
    };

    // Create the DX11 API device object, and get a corresponding context.
    ComPtr<ID3D11Device> device;
    ComPtr<ID3D11DeviceContext> context;
    DX::ThrowIfFailed(
        D3D11CreateDevice(
            nullptr,                    // specify null to use the default adapter
            D3D_DRIVER_TYPE_HARDWARE,
            nullptr,                    // leave as nullptr unless software device
            creationFlags,              // optionally set debug and Direct2D compatibility flags
            featureLevels,              // list of feature levels this app can support
            ARRAYSIZE(featureLevels),   // number of entries in above list
            D3D11_SDK_VERSION,          // always set this to D3D11_SDK_VERSION
            &device,                    // returns the Direct3D device created
            &m_featureLevel,            // returns feature level of device created
            &context                    // returns the device immediate context
            )
        );

    // Get the DirectX11.1 device by QI off the DirectX11 one.
    DX::ThrowIfFailed(
        device.As(&m_d3dDevice)
        );

    // And get the corresponding device context in the same way.
    DX::ThrowIfFailed(
        context.As(&m_d3dContext)
        );
}

// Allocate all memory resources that change on a window SizeChanged event.
void Direct3DBase::CreateWindowSizeDependentResources()
{ 
    // Store the window bounds so the next time we get a SizeChanged event we can
    // avoid rebuilding everything if the size is identical.
    m_windowBounds = m_window->Bounds;

    // If the swap chain already exists, resize it.
    if(m_swapChain != nullptr)
    {
        DX::ThrowIfFailed(
            m_swapChain->ResizeBuffers(2, 0, 0, DXGI_FORMAT_B8G8R8A8_UNORM, 0)
            );
    }
    // Otherwise, create a new one.
    else
    {
        // Create a descriptor for the swap chain.
        DXGI_SWAP_CHAIN_DESC1 swapChainDesc = {0};
        swapChainDesc.Width = 0;                                     // use automatic sizing
        swapChainDesc.Height = 0;
        swapChainDesc.Format = DXGI_FORMAT_B8G8R8A8_UNORM;           // this is the most common swapchain format
        swapChainDesc.Stereo = false; 
        swapChainDesc.SampleDesc.Count = 1;                          // don't use multi-sampling
        swapChainDesc.SampleDesc.Quality = 0;
        swapChainDesc.BufferUsage = DXGI_USAGE_RENDER_TARGET_OUTPUT;
        swapChainDesc.BufferCount = 2;                               // use two buffers to enable flip effect
        swapChainDesc.Scaling = DXGI_SCALING_NONE;
        swapChainDesc.SwapEffect = DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL; // we recommend using this swap effect for all applications
        swapChainDesc.Flags = 0;

        // Once the desired swap chain description is configured, it must be created on the same adapter as our D3D Device

        // First, retrieve the underlying DXGI Device from the D3D Device
        ComPtr<IDXGIDevice1>  dxgiDevice;
        DX::ThrowIfFailed(
            m_d3dDevice.As(&dxgiDevice)
            );

        // Identify the physical adapter (GPU or card) this device is running on.
        ComPtr<IDXGIAdapter> dxgiAdapter;
        DX::ThrowIfFailed(
            dxgiDevice->GetAdapter(&dxgiAdapter)
            );

        // And obtain the factory object that created it.
        ComPtr<IDXGIFactory2> dxgiFactory;
        DX::ThrowIfFailed(
            dxgiAdapter->GetParent(
                __uuidof(IDXGIFactory2), 
                &dxgiFactory
                )
            );

		Windows::UI::Core::CoreWindow^ p = m_window.Get();

        // Create a swap chain for this window from the DXGI factory.
        DX::ThrowIfFailed(
            dxgiFactory->CreateSwapChainForCoreWindow(
                m_d3dDevice.Get(),
                reinterpret_cast<IUnknown*>(p),
                &swapChainDesc,
                nullptr,    // allow on all displays
                &m_swapChain
                )
            );
            
        // Ensure that DXGI does not queue more than one frame at a time. This both reduces 
        // latency and ensures that the application will only render after each VSync, minimizing 
        // power consumption.
        DX::ThrowIfFailed(
            dxgiDevice->SetMaximumFrameLatency(1)
            );
    }
    
    // Obtain the backbuffer for this window which will be the final 3D rendertarget.
    ComPtr<ID3D11Texture2D> backBuffer;
    DX::ThrowIfFailed(
        m_swapChain->GetBuffer(
            0,
            __uuidof(ID3D11Texture2D),
            &backBuffer
            )
        );

    // Create a view interface on the rendertarget to use on bind.
    DX::ThrowIfFailed(
        m_d3dDevice->CreateRenderTargetView(
            backBuffer.Get(),
            nullptr,
            &m_renderTargetView
            )
        );

    // Cache the rendertarget dimensions in our helper class for convenient use.
    D3D11_TEXTURE2D_DESC backBufferDesc;
    backBuffer->GetDesc(&backBufferDesc);
    m_renderTargetSize.Width  = static_cast<float>(backBufferDesc.Width);
    m_renderTargetSize.Height = static_cast<float>(backBufferDesc.Height);

    // Create a descriptor for the depth/stencil buffer.
    CD3D11_TEXTURE2D_DESC depthStencilDesc(
        DXGI_FORMAT_D24_UNORM_S8_UINT, 
        backBufferDesc.Width,
        backBufferDesc.Height,
        1,
        1,
        D3D11_BIND_DEPTH_STENCIL);

    // Allocate a 2-D surface as the depth/stencil buffer.
    ComPtr<ID3D11Texture2D> depthStencil;
    DX::ThrowIfFailed(
        m_d3dDevice->CreateTexture2D(
            &depthStencilDesc,
            nullptr,
            &depthStencil
            )
        );

    // Create a DepthStencil view on this surface to use on bind.
    DX::ThrowIfFailed(
        m_d3dDevice->CreateDepthStencilView(
            depthStencil.Get(),
            &CD3D11_DEPTH_STENCIL_VIEW_DESC(D3D11_DSV_DIMENSION_TEXTURE2D),
            &m_depthStencilView
            )
        );

    // Create a viewport descriptor of the full window size.
    CD3D11_VIEWPORT viewPort(
        0.0f,
        0.0f,
        static_cast<float>(backBufferDesc.Width),
        static_cast<float>(backBufferDesc.Height)
        );
        
    // Set the current viewport using the descriptor.
    m_d3dContext->RSSetViewports(1, &viewPort);
}

void Direct3DBase::UpdateForWindowSizeChange()
{
    if (m_window->Bounds.Width  != m_windowBounds.Width ||
        m_window->Bounds.Height != m_windowBounds.Height)
    {
        m_renderTargetView = nullptr;
        m_depthStencilView = nullptr;
        CreateWindowSizeDependentResources();
    }
}

void Direct3DBase::Present()
{
    // The first argument instructs DXGI to block until VSync, putting the application
    // to sleep until the next VSync. This ensures we don't waste any cycles rendering
    // frames that will never be displayed to the screen.
    HRESULT hr = m_swapChain->Present(1, 0);

    // If the device was removed either by a disconnect or a driver upgrade, we 
    // must completely reinitialize the renderer.
    if (hr == DXGI_ERROR_DEVICE_REMOVED || hr == DXGI_ERROR_DEVICE_RESET)
    {
        Initialize(m_window.Get());
    }
    else
    {
        DX::ThrowIfFailed(hr);
    }
}
`,
      },
      {
        title: "C#",
        language: "csharp",
        code: `/*
* C# Program to Display All the Prime Numbers Between 1 to 100
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VS
{
	class Program
	{
		static void Main(string[] args)
		{
			bool isPrime = true;
			Console.WriteLine("Prime Numbers : ");
			for (int i = 2; i <= 100; i++)
			{
				for (int j = 2; j <= 100; j++)
				{
					if (i != j && i % j == 0)
					{
						isPrime = false;
						break;
					}
				}
				
				if (isPrime)
				{
					Console.Write("\t" +i);
				}
				isPrime = true;
			}
			Console.ReadKey();
		}
	}
}
`,
      },
      {
        title: "Go",
        language: "go",
        code: `// We often need our programs to perform operations on
// collections of data, like selecting all items that
// satisfy a given predicate or mapping all items to a new
// collection with a custom function.

// In some languages it's idiomatic to use [generic](http://en.wikipedia.org/wiki/Generic_programming)
// data structures and algorithms. Go does not support
// generics; in Go it's common to provide collection
// functions if and when they are specifically needed for
// your program and data types.

// Here are some example collection functions for slices
// of 'strings'. You can use these examples to build your
// own functions. Note that in some cases it may be
// clearest to just inline the collection-manipulating
// code directly, instead of creating and calling a
// helper function.

package main

import "strings"
import "fmt"

// Returns the first index of the target string 't', or
// -1 if no match is found.
func Index(vs []string, t string) int {
    for i, v := range vs {
        if v == t {
            return i
        }
    }
    return -1
}

// Returns 'true' if the target string t is in the
// slice.
func Include(vs []string, t string) bool {
    return Index(vs, t) >= 0
}

// Returns 'true' if one of the strings in the slice
// satisfies the predicate 'f'.
func Any(vs []string, f func(string) bool) bool {
    for _, v := range vs {
        if f(v) {
            return true
        }
    }
    return false
}

// Returns 'true' if all of the strings in the slice
// satisfy the predicate 'f'.
func All(vs []string, f func(string) bool) bool {
    for _, v := range vs {
        if !f(v) {
            return false
        }
    }
    return true
}

// Returns a new slice containing all strings in the
// slice that satisfy the predicate 'f'.
func Filter(vs []string, f func(string) bool) []string {
    vsf := make([]string, 0)
    for _, v := range vs {
        if f(v) {
            vsf = append(vsf, v)
        }
    }
    return vsf
}

// Returns a new slice containing the results of applying
// the function 'f' to each string in the original slice.
func Map(vs []string, f func(string) string) []string {
    vsm := make([]string, len(vs))
    for i, v := range vs {
        vsm[i] = f(v)
    }
    return vsm
}

func main() {

    // Here we try out our various collection functions.
    var strs = []string{"peach", "apple", "pear", "plum"}

    fmt.Println(Index(strs, "pear"))

    fmt.Println(Include(strs, "grape"))

    fmt.Println(Any(strs, func(v string) bool {
        return strings.HasPrefix(v, "p")
    }))

    fmt.Println(All(strs, func(v string) bool {
        return strings.HasPrefix(v, "p")
    }))

    fmt.Println(Filter(strs, func(v string) bool {
        return strings.Contains(v, "e")
    }))

    // The above examples all used anonymous functions,
    // but you can also use named functions of the correct
    // type.
    fmt.Println(Map(strs, strings.ToUpper))

}
`,
      },
      {
        title: "Java",
        language: "java",
        code: `/*
	Basic Java example using FizzBuzz
*/

import java.util.Random;

public class Example {
	public static void main (String[] args){
		// Generate a random number between 1-100. (See generateRandomNumber method.)
		int random = generateRandomNumber(100);

		// Output generated number.
		System.out.println("Generated number: " + random + "\n");

		// Loop between 1 and the number we just generated.
		for (int i=1; i<=random; i++){
			// If i is divisible by both 3 and 5, output "FizzBuzz".
			if (i % 3 == 0 && i % 5 == 0){
				System.out.println("FizzBuzz");
			}
			// If i is divisible by 3, output "Fizz"
			else if (i % 3 == 0){
				System.out.println("Fizz");
			}
			// If i is divisible by 5, output "Buzz".
			else if (i % 5 == 0){
				System.out.println("Buzz");
			}
			// If i is not divisible by either 3 or 5, output the number.
			else {
				System.out.println(i);
			}
		}
	}

	/**
		Generates a new random number between 0 and 100.
		@param bound The highest number that should be generated.
		@return An integer representing a randomly generated number between 0 and 100.
	*/
	private static int generateRandomNumber(int bound){
		// Create new Random generator object and generate the random number.
		Random randGen = new Random();
		int randomNum = randGen.nextInt(bound);

		// If the random number generated is zero, use recursion to regenerate the number until it is not zero.
		if (randomNum < 1){
			randomNum = generateRandomNumber(bound);
		}

		return randomNum;
	}
}
 `,
      },
      {
        title: "Javascript",
        language: "javascript",
        code: `/*
  © Microsoft. All rights reserved.

  This library is supported for use in Windows Tailored Apps only.

  Build: 6.2.8100.0 
  Version: 0.5 
*/

(function (global, undefined) {
	"use strict";
	undefinedVariable = {};
	undefinedVariable.prop = 5;

	function initializeProperties(target, members) {
		var keys = Object.keys(members);
		var properties;
		var i, len;
		for (i = 0, len = keys.length; i < len; i++) {
			var key = keys[i];
			var enumerable = key.charCodeAt(0) !== /*_*/95;
			var member = members[key];
			if (member && typeof member === 'object') {
				if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
					if (member.enumerable === undefined) {
						member.enumerable = enumerable;
					}
					properties = properties || {};
					properties[key] = member;
					continue;
				} 
			}
			if (!enumerable) {
				properties = properties || {};
				properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
				continue;
			}
			target[key] = member;
		}
		if (properties) {
			Object.defineProperties(target, properties);
		}
	}

	(function (rootNamespace) {

		// Create the rootNamespace in the global namespace
		if (!global[rootNamespace]) {
			global[rootNamespace] = Object.create(Object.prototype);
		}

		// Cache the rootNamespace we just created in a local variable
		var _rootNamespace = global[rootNamespace];
		if (!_rootNamespace.Namespace) {
			_rootNamespace.Namespace = Object.create(Object.prototype);
		}

		function defineWithParent(parentNamespace, name, members) {
			/// <summary locid="1">
			/// Defines a new namespace with the specified name, under the specified parent namespace.
			/// </summary>
			/// <param name="parentNamespace" type="Object" locid="2">
			/// The parent namespace which will contain the new namespace.
			/// </param>
			/// <param name="name" type="String" locid="3">
			/// Name of the new namespace.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			var currentNamespace = parentNamespace,
				namespaceFragments = name.split(".");

			for (var i = 0, len = namespaceFragments.length; i < len; i++) {
				var namespaceName = namespaceFragments[i];
				if (!currentNamespace[namespaceName]) {
					Object.defineProperty(currentNamespace, namespaceName, 
						{ value: {}, writable: false, enumerable: true, configurable: true }
					);
				}
				currentNamespace = currentNamespace[namespaceName];
			}

			if (members) {
				initializeProperties(currentNamespace, members);
			}

			return currentNamespace;
		}

		function define(name, members) {
			/// <summary locid="6">
			/// Defines a new namespace with the specified name.
			/// </summary>
			/// <param name="name" type="String" locid="7">
			/// Name of the namespace.  This could be a dot-separated nested name.
			/// </param>
			/// <param name="members" type="Object" locid="4">
			/// Members in the new namespace.
			/// </param>
			/// <returns locid="5">
			/// The newly defined namespace.
			/// </returns>
			return defineWithParent(global, name, members);
		}

		// Establish members of the "WinJS.Namespace" namespace
		Object.defineProperties(_rootNamespace.Namespace, {

			defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

			define: { value: define, writable: true, enumerable: true }

		});

	})("WinJS");

	(function (WinJS) {

		function define(constructor, instanceMembers, staticMembers) {
			/// <summary locid="8">
			/// Defines a class using the given constructor and with the specified instance members.
			/// </summary>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			if (instanceMembers) {
				initializeProperties(constructor.prototype, instanceMembers);
			}
			if (staticMembers) {
				initializeProperties(constructor, staticMembers);
			}
			return constructor;
		}

		function derive(baseClass, constructor, instanceMembers, staticMembers) {
			/// <summary locid="13">
			/// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
			/// </summary>
			/// <param name="baseClass" type="Function" locid="14">
			/// The class to inherit from.
			/// </param>
			/// <param name="constructor" type="Function" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <param name="instanceMembers" type="Object" locid="10">
			/// The set of instance fields, properties and methods to be made available on the class.
			/// </param>
			/// <param name="staticMembers" type="Object" locid="11">
			/// The set of static fields, properties and methods to be made available on the class.
			/// </param>
			/// <returns type="Function" locid="12">
			/// The newly defined class.
			/// </returns>
			if (baseClass) {
				constructor = constructor || function () { };
				var basePrototype = baseClass.prototype;
				constructor.prototype = Object.create(basePrototype);
				Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
				Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
				if (instanceMembers) {
					initializeProperties(constructor.prototype, instanceMembers);
				}
				if (staticMembers) {
					initializeProperties(constructor, staticMembers);
				}
				return constructor;
			} else {
				return define(constructor, instanceMembers, staticMembers);
			}
		}

		function mix(constructor) {
			/// <summary locid="15">
			/// Defines a class using the given constructor and the union of the set of instance members
			/// specified by all the mixin objects.  The mixin parameter list can be of variable length.
			/// </summary>
			/// <param name="constructor" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <returns locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			var i, len;
			for (i = 0, len = arguments.length; i < len; i++) {
				initializeProperties(constructor.prototype, arguments[i]);
			}
			return constructor;
		}

		// Establish members of "WinJS.Class" namespace
		WinJS.Namespace.define("WinJS.Class", {
			define: define,
			derive: derive,
			mix: mix
		});

	})(WinJS);

})(this);`,
      },
      {
        title: "Kotlin",
        language: "kotlin",
        code: `const val POINTS_X_PASS: Int = 15
val EZPassAccounts: MutableMap<Int, Int> = mutableMapOf(1 to 100, 2 to 100, 3 to 100)
val EZPassReport: Map<Int, Int> = EZPassAccounts

// update points credit
fun updatePointsCredit(accountId: Int) {
    if (EZPassAccounts.containsKey(accountId)) {
        println("Updating $accountId...")
        EZPassAccounts[accountId] = EZPassAccounts.getValue(accountId) + POINTS_X_PASS
    } else {
        println("Error: Trying to update a non-existing account (id: $accountId)")
    }
}

fun accountsReport() {
    println("EZ-Pass report:")
    EZPassReport.forEach{
        k, v -> println("ID $k: credit $v")
    }
}

fun main() {
    accountsReport()
    updatePointsCredit(1)
    updatePointsCredit(1)
    updatePointsCredit(5)
    accountsReport()
}`,
      },
      {
        title: "Python",
        language: "python",
        code: `import banana


class Monkey:
    # Bananas the monkey can eat.
    capacity = 10
    def eat(self, n):
        """Make the monkey eat n bananas!"""
        self.capacity -= n * banana.size

    def feeding_frenzy(self):
        self.eat(9.25)
        return "Yum yum"
`,
      },
      {
        title: "Rust",
        language: "rust",
        code: `fn main() {
    let greetings = ["Hello", "Hola", "Bonjour",
                     "Ciao", "こんにちは", "안녕하세요",
                     "Cześć", "Olá", "Здравствуйте",
                     "Chào bạn", "您好", "Hallo",
                     "Hej", "Ahoj", "سلام"];

    for (num, greeting) in greetings.iter().enumerate() {
        print!("{} : ", greeting);
        match num {
            0 =>  println!("This code is editable and runnable!"),
            1 =>  println!("¡Este código es editable y ejecutable!"),
            2 =>  println!("Ce code est modifiable et exécutable !"),
            3 =>  println!("Questo codice è modificabile ed eseguibile!"),
            4 =>  println!("このコードは編集して実行出来ます！"),
            5 =>  println!("여기에서 코드를 수정하고 실행할 수 있습니다!"),
            6 =>  println!("Ten kod można edytować oraz uruchomić!"),
            7 =>  println!("Este código é editável e executável!"),
            8 =>  println!("Этот код можно отредактировать и запустить!"),
            9 =>  println!("Bạn có thể edit và run code trực tiếp!"),
            10 => println!("这段代码是可以编辑并且能够运行的！"),
            11 => println!("Dieser Code kann bearbeitet und ausgeführt werden!"),
            12 => println!("Den här koden kan redigeras och köras!"),
            13 => println!("Tento kód můžete upravit a spustit"),
            14 => println!("این کد قابلیت ویرایش و اجرا دارد!"),
            _ =>  {},
        }
    }
}
`,
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
