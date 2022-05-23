<template>
    <div>
        <h1 class="bg-sky-300 text-lg text-center font-semibold text-sky-700">{{ message }}</h1>
        <h1 class="text-4xl text-center text-amber-500 font-josefin">Hello world (Custom Font)</h1>
        <h2 class="text-3xl text-gray-200 bg-indigo-500 text-center py-2 uppercase">Tailwind Forms Plugin Example</h2>
        <div class="max-w-md mx-auto">
            <!-- 1 TAILWIND FORM EXAMPLE -->
            <form class="mb-0 space-y-6" action="#">
                <!-- 2 FIELD 1 -->
                <div>
                    <!-- 3 FIELD 1 NAME -->
                    <label class="block test-sm font-medium text-gray-700" for="email">Email Adress</label>
                    <!-- 4 DIV INPUT FIELD 1 -->
                    <div class="mt-1">
                        <!-- 1 INPUT FIELD 1 -->
                        <input class="" id="email" name="email" type="email" autocomplete="email" required>
                    </div>
                </div>
                <!-- 2 FIELD 2 -->
                <div>
                    <!-- 3 FIELD 2 NAME -->
                    <label class="block test-sm font-medium text-gray-700" for="password">Password</label>
                    <!-- 4 DIV INPUT FIELD 2 -->
                    <div class="mt-1">
                        <!-- 1 INPUT FIELD 2 -->
                        <input class="" id="password" name="password" type="password" autocomplete="current-password" required>
                    </div>
                </div>
                <!-- 2 FIELD 3 -->
                <div>
                    <!-- 3 FIELD 3 NAME -->
                    <label class="block test-sm font-medium text-gray-700" for="company-size">Company size</label>
                    <!-- 4 DIV INPUT FIELD 3 -->
                    <div class="mt-1">
                        <!-- 1 INPUT FIELD 3 -->
                        <select class="" name="company-size" id="company-size">
                            <option value="">Please select</option>
                            <option value="small">1 to 10 employees</option>
                            <option value="medium">11 to 50 employees</option>
                            <option value="large">50+ employees</option>
                        </select>
                    </div>
                </div>
                <!-- 2 FIELD 4 -->
                <div class="flex items-center">
                    <input class="" type="checkbox" name="terms-and-privacy" id="terms-and-privacy">
                    <label class="ml-2 block text-sm text-gray-700" for="terms-and-privacy">I agree to the <a class="text-amber-600 hover:text-emerald-500" href="#">Terms</a> and <a class="text-emerald-600 hover:text-amber-500" href="#">Privacy policy</a></label>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// import Navbar from "@/modules/shared/components/Navbar.vue"


    export default {
        name: 'DemoForm',
        props: {
            message: {
                type: String,
                default: 'This is a DEFAULT MESSAGE',
                required: false,
            },
            class: {
                type: String
            }
        },
    }

</script>


<style scopped>

</style>
