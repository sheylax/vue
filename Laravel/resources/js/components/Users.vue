<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users : []
            }
        },
        mounted() {
            axios.get('/username')
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }
    }
</script>
