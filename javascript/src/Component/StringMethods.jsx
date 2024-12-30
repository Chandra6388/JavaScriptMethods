import React from "react";

const StringMethods = () => {
    const str = "Hello World!";
    
    // String Creation
    // to convert Interger to String
    // toString , String , typeof
    // const num = 123;
    // const strNum = num.toString();
    // const strNum2 = String(num);
    // console.log("1", typeof(strNum), strNum);
    // console.log("2", typeof(strNum2), strNum2);
// ======================================================================
    // String Manipulation
    // charAt , concat, slice, substring, substr
    let str1 = "Hello";
    let str2 = "World!";
    console.log("1", str1.charAt(8)); // ""
    console.log("2" , str1.charAt(0)); // H
    console.log("3", str1.concat(str2)); // Hello World!
    console.log("4", str1.includes("He")); // true
    console.log("5", str1.includes("ho")); // false
    console.log("6", str1.endsWith("lo")); // true
    console.log("7", str1.startsWith("He")); // true
    console.log("8", str1.indexOf("l")); // 2
    console.log("9", str1.lastIndexOf("l")); // 3
    console.log("10", str1.repeat(3)); // HelloHelloHello
    console.log("10", Array(3).fill(str1).join(" ")); // if we want to scpace between the string then we can use repeat
    console.log("11", str1.replace("H", "CP")); // CPello
    console.log("12", str1.replaceAll("H", "CPP")); // CPPello CPPello
    console.log("13", str1.slice(1, 4)); // ell
    console.log("14", str1.substring(1, 4)); // ell
    
    // diffres between slice and substring
    // slice can take negative values
    // substring can't take negative values
    console.log("15", str1.slice(-4)); // ello
    console.log("16", str1.substring(1, 4)); // ell
    console.log("17", str1.substr(1, 4)); // ello

    // substr and substring difference
    // substr second parameter is the length
    // substring second parameter is the index
    console.log("18", str1.substr(3, 4)); // lo H
    console.log("19", str1.substring(3, 4)); // l

    let str3 = "1,2,3,4,5"
    console.log("20", str3.split(",")); // ["1", "2", "3", "4", "5"]

    // trim and trimEnd and trimStart
    let str4 = "    Hello World!    ";
    console.log("21", str4.trim()); // Hello World!
    console.log("22", str4.trimEnd()); // "    Hello World!"
    console.log("23", str4.trimStart()); // "Hello World!    "


    // match and search
    let str5 = "ab3cd234d";
    console.log("24", str5.match(/\d+/)); // ["3", index: 2, input: "ab3cd234", groups: undefined]
    console.log("25", str5.match(/\d+/g)); // ["3", "234"]
    console.log("26", str5.search(/\d+/g)); // 2
 
    return (
        <div>
        <h1>String Methods</h1>
        </div>
    );
    }

export default StringMethods;