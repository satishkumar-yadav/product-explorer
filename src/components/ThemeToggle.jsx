import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button className="ml-4 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;























/*

document.documentElement
Refers to the root <html> element in the DOM (Document Object Model) of the webpage.

This is the highest-level HTML element and targetting it applies CSS classes globally to the entire page.


.classList
classList is a read-only property of an element that returns a live DOMTokenList representing the element's class attribute values.

It provides convenient methods to add, remove, check, and toggle CSS classes without manipulating the className string directly.

It behaves like a set of class tokens attached to the element.


.toggle("dark", theme === "dark")
toggle() is a method of the DOMTokenList (i.e., classList) used to add or remove a class.

It can be called with two parameters:

The class name string to toggle ("dark" here).

A boolean condition (theme === "dark" here).

Behavior:

If the second parameter is true, the method adds the "dark" class to the element if it’s not already present.

If the second parameter is false, it removes the "dark" class if it exists.

Returns a boolean indicating whether the class is now present (true) or not (false).

What This Code Does
It adds the CSS class "dark" to the <html> element when the theme state equals "dark".

It removes the "dark" class when the theme is anything else (typically "light").

This is a common pattern to toggle global dark mode styles in an application, assuming CSS styles are written to apply when the .dark class is present on the root element.

Why This Approach Is Useful
Using the root <html> element means all descendant elements can be styled conditionally, making global theme styling simple and performant.

Using classList.toggle with the second force boolean makes code concise, removing the need for if-else.

It avoids manipulating the className string manually, reducing risks of errors or overwriting other classes.

Example
Before toggling:

xml
<html class="light">
After running:

js
document.documentElement.classList.toggle("dark", true);
Results in:

xml
<html class="dark">
If run again with false:

js
document.documentElement.classList.toggle("dark", false);
It removes "dark":

xml
<html>



*/