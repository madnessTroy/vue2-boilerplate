<template>
    <div id="app">
        <div class="text-danger">123123</div>
        <nav>
            <router-link :to="{name: 'calendar.index'}">calendar</router-link>
            |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>
