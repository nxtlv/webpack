<template>
    <Resize id="app" class="app-layout">
        <div class="preview-text">
            <Logo class="logo"></Logo>
            <h3>{{ msg }}</h3>
        </div>

        <menu-app></menu-app>

        <div class="center">

            <router-view></router-view>
        </div>

    </Resize>
</template>

<script>
    import Resize from '@/components/common/Resize';
    import Menu from '@/components/common/Menu';
    import Logo from './assets/svg/develup_logo.svg';

    export default {
        name: 'app',

        data () {
            return {
                msg: 'Vue starter template'
            }
        },
        components: {
            Logo,
            'menu-app':Menu,
            Resize
        }
    }
</script>

<style scope>
    .preview-text{
        display: block;
        width: 40em;
        margin: 4em auto;
        text-align: center;
    }
    h3{
        font-size: 2em;
        margin: 1em 0;
    }
</style>

