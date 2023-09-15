<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>
    <link rel="stylesheet" href="{{ asset('css/contact-styles.css') }}">
</head>

<body>
    <form action="" method="post" action="{{ route('contact.store') }}">

        @csrf <!-- protects against cross-site request forgery attacks. -->

        <!-- If the user tries to submit the form above the rate limit display a message -->
        @if ($errors->any())
        <div class="alert alert-danger">
            @foreach ($errors->all() as $error)
            @if (str_contains($error, 'rate limit')) <!-- checking if the error message is related to rate limiting -->
            <div>Sorry, you have submitted the form too many times. Please wait a minute and then try again.</div>
            @else
            <div>{{ $error }}</div>
            @endif
            @endforeach
        </div>
        @endif


        <!-- Always provide feedback to the user to let them know if their form submission was successful or not. -->
        @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
        @endif



        <!-- Email Header Injection: Ensure that user-supplied data doesn't introduce email header injections. Laravel's mail component should prevent most header injection attempts, but it's still good to be aware of the issue. In the scenario you provided, there's potential for email header injection if someone tries to include email headers in the subject or other fields. Laravel's built-in Mail feature does mitigate this, but always keep this in mind if you switch to a different email sending method or library. -->

        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control {{ $errors->has('name') ? 'error' : '' }}" name="name" id="name" value="{{ old('name') }}">

            <!-- Error -->
            @if ($errors->has('name'))

            <!-- The Blade syntax is safe and automatically escapes any output within it, which is why you use it to display these error messages. Even if someone tried to submit malicious input, using the Blade syntax would ensure it's displayed safely. -->
            <div class="error">
                {{ $errors->first('name') }}
            </div>
            @endif
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control {{ $errors->has('email') ? 'error' : '' }}" name="email" id="email" value="{{ old('email') }}">

            @if ($errors->has('email'))
            <div class="error">
                {{ $errors->first('email') }}
            </div>
            @endif
        </div>

        <div class="form-group">
            <label>Phone</label>
            <input type="text" class="form-control {{ $errors->has('phone') ? 'error' : '' }}" name="phone" id="phone" value="{{ old('phone') }}">

            @if ($errors->has('phone'))
            <div class="error">
                {{ $errors->first('phone') }}
            </div>
            @endif
        </div>

        <div class="form-group">
            <label>Subject</label>
            <input type="text" class="form-control {{ $errors->has('subject') ? 'error' : '' }}" name="subject" id="subject" value="{{ old('subject') }}">

            @if ($errors->has('subject'))
            <div class="error">
                {{ $errors->first('subject') }}
            </div>
            @endif
        </div>

        <div class="form-group">
            <label>Message</label>
            <textarea class="form-control {{ $errors->has('message') ? 'error' : '' }}" name="message" id="message" rows="4">{{ old('message') }}</textarea>

            @if ($errors->has('message'))
            <div class="error">
                {{ $errors->first('message') }}
            </div>
            @endif
        </div>

        <input type="submit" name="send" value="Submit" class="btn btn-dark btn-block">
    </form>
</body>

</html>