<template>
    <div>
        <!-- Button trigger modal -->
        <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 id="exampleModalLabel" class="modal-title fs-5">Modal title</h1>
                        <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div data-bs-toggle="tooltip" title="123123123"> test tooltip</div>

    </div>
</template>

<script>
export default {
    name: 'HomeView',
    mounted() {
        this.$helper.initTooltip()
    }
}
</script>
