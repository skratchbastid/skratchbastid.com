<script setup>
import { ref } from 'vue'

// Stato per lo switch "Favourites only"
const favouritesOnly = ref(false);

const selectedYear = ref('');
const styles = ['Style 1', 'Style 2', 'Style 3'];
const selectedStyle = ref(styles[0]);
</script>

<template>
    <div class="mx-4 md:mx-10 my-8 flex justify-between items-center pt-8">
        <!-- Switch Favourites Only -->
        <div class="flex items-center space-x-2">
            <label class="text-sm font-medium">Favourites only</label>
            <input 
                type="checkbox" 
                v-model="favouritesOnly" 
                class="toggle-checkbox"
            />
        </div>

        <!-- Dropdown e Date Picker -->
        <div class="flex items-center space-x-4">
            <!-- Dropdown -->
            <div>
                <label for="style-select" class="sr-only">Style</label>
                <select 
                    id="style-select" 
                    v-model="selectedStyle" 
                    class="rounded px-3 py-1 text-sm"
                >
                    <option disabled value="">Style</option>
                    <option v-for="style in styles" :key="style" :value="style">
                        {{ style }}
                    </option>
                </select>
            </div>

            <!-- Input Date -->
            <div>
                <label for="year-select" class="sr-only">Year</label>
                <input 
                    id="year-select" 
                    type="date" 
                    v-model="selectedYear" 
                    class="border rounded px-3 py-1 text-sm"
                />
            </div>
        </div>
    </div>

    <div>
        <AllAudios></AllAudios>
    </div>
</template>

<style scoped>
.scrollbar-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Opera */
}
.toggle-checkbox {
    appearance: none;
    width: 40px;
    height: 20px;
    background: #ccc;
    border-radius: 9999px;
    position: relative;
    outline: none;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
}
.toggle-checkbox:checked {
    background: #4CAF50;
}
.toggle-checkbox::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
}
.toggle-checkbox:checked::before {
    transform: translateX(20px);
}
</style>
