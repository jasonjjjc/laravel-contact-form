<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## Contact Form

This contact form was built using PHP. It has been specifically designed to be as secure as possible to prevent any risks to the database. The form was built using multiple Laravel features and development techniques that made the development process simple:

## Laravel Features Used
- [Validation](https://laravel.com/docs/validation). Validating the email and phone inputs using regex. This ensures that the data meets certain criteria. For some strange reason, Laravel's own email validation function did not reject emails without a tld so I created a custom one that does. <br><br>
- SQL Injection Prevention using [Eloquent](https://laravel.com/docs/eloquent). Laravel's built in container prevents SQL injection by using PDO parameter binding. This means that the SQL query is sent to the database separately from the data. This prevents the database from executing any malicious code that may be sent through the form. <br><br>
- [XSS](https://laravel.com/docs/blade). Using Blade's double curly brace syntax ({{ }}), when displaying user data in a view, automatically escapes the output, preventing cross-site scripting attacks. <br><br>
- [CSRF](https://laravel.com/docs/csrf). Protects against cross-site request forgery attacks. <br><br>
- Email Header Injection. Ensure that user-supplied data doesn't introduce email header injections. There's potential for email header injection if someone tries to include email headers in the subject or other fields. Laravel's built-in Mail feature should prevent most header injection attempts, but always keep this in mind if switching to a different email sending method or library. <br><br>
- [Rate Limiting](https://laravel.com/docs/rate-limiting). Prevents users from spamming the form or brute force attacks. The rate limit is set to 2 attempts per minute. This can be changed in the routes/web.php file. <br><br>
- Protected Environment Variables. The .env file is not included in the repository. This is because it contains sensitive information such as the database password. The .env file is also ignored by git so it will not be pushed to the repository. Ensure that APP_DEBUG is set to false in production .env files to prevent detailed error messages from being displayed. <br><br>

## Development Techniques Used
- Error Messages. Displaying detailed error messages to the end user can leak information about your system or the underlying logic. Always ensure that any error messages shown to the user are generic and don't give away specifics. Laravel's built-in validation errors are generic and don't give away any information about the underlying system. However for some, such as rate limit errors, the language used in the error messages is rather technical, so I have created a custom error message that is more understandable for the average user. <br><br>
- Validation Data Source. AVOID using $request->all() and if you do, be careful when adding new fields to the form. If you don't include them in validation, they will pass through unchecked. A safer practice is to list the fields you want explicitly, either in the create() method or by getting them individually from the $request object. I listed them explicitly in a variable called contactData then passed that to the Contact::create() method. <br><br>
- User Feedback. Always provide feedback to the user to let them know if their form submission was successful or not. On submission the user is shown a simple message that confirms whether the submission was successful or not. <br><br>

## Reflections
- First of all, I did not enjoy Treehouse at all. I have been taught to avoid "Magical" code but php is full of it and syntax details appear random and incoherent. I spent a lot more time than usual trying to understand videos, code, documentation and the overall process. I think that the PHP website is terrible and the language itself has a lot of challenges that could be cleared up with some simple syntax changes (ie. something like React props, or some notation following @includes statements that says what is inside it to improve readability). <br><br>
- I found the Laravel documentation to be very helpful. It was easy to follow and understand. <br><br>
- ChatGPT seems to be excellent with PHP. Much better than with CSS/SASS or Javascript. At times I felt like I was surfing along so smoothly in a way that never happened with previous projects. I believe this would be a result of the overwhelming majority of websites being built with PHP so chatGPT has had plenty of training data to learn from. <br><br>
- I am really looking forward to building more projects in the future using Laravel. I feel like I have only scratched the surface of what it can do. I am also looking forward to learning more about the Laravel ecosystem and the different tools that are available. <br><br>

# laravel-contact-form
