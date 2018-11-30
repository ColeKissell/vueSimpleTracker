<template>
    <div>
            <ul>
                <p>Id:</p>
                <li>{{item._id}}</li>
                <p>Name:</p>
                <li>{{item.name}}</li>
                <p>Description:</p>
                <li>{{item.description}}</li>
                <button @click="getItemById">pick me</button>
            </ul>
            <hr/>
            <br/>
    </div>
</template>

<script>
    export default {
        name: 'DisplayItem',
        props: {
                    id: '',
                    name: '',
                    description: ''
        }
    
    }
</script>
