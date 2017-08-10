<template>
    <div class="flex-grid">
        <div class="column">
            <div class="index1">
                重要 紧急
            </div>
            <div class="index2">
                重要 不紧急
            </div>
        </div>
        <div class="column">
            <div class="index3">
                不重要 紧急
            </div>
            <div class="index4">
                不重要 不紧急
            </div>
        </div>
    </div>
</template>
<script>
  export default {};
</script>

<style lang="stylus">
    main {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        padding-top: 70px;
    }

    .flex-grid {
        width 100%
        height 100%
        background red
        display flex
        flex-direction row
        justify-content space-between
        flex-wrap wrap
        .column {
            width 50%
            height 100%
            .index1 {
                background firebrick
                width 100%
                height 50%
            }
            .index2 {
                background gold
                width 100%
                height 50%
            }
            .index3 {
                background green
                width 100%
                height 50%
            }
            .index4 {
                background moccasin
                width 100%
                height 50%
            }
        }

    }

    .grid-item {
        margin: 1em;
        border: 1px solid #000;
        display: flex;
        flex-basis: calc(50%);
        justify-content: center;
        flex-direction: column;
    }
</style>

