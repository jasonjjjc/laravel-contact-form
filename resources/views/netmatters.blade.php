<!doctype html>
<html lang="en">

@include('head')

<body>
    @include('sidenav')
    <div id="container">
        <div id="cover"></div>
        @include('header')
        <main id="main">

            @yield('content')

            @include('signup')
            @include('footer')
            
        </main>
        @include('crumb-overlay')
        @include('crumb-preferences-button')
    </div>
</body>

</html>