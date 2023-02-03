<template>
    <div id="search" class="search_area">
        <div class="input_field">
            <i class="icon ic_search black"></i>
            <input type="search" class="search_field" :placeholder="placeholderValue">
        </div>
        <div id="autoFrame">
            <div class="api_atcmp_wrap">
                <ul class="kwd_lst">
                    <li class="item on" data-rank="1" data-template-type="suggestion" data-keyword="ddp">
                        <a href="#" class="kwd">
                            <span class="fix"><span class="common_ico_kwd"><i class="imsc ico_search"></i></span><strong
                                    class="mark">dd</strong>p</span>
                        </a>
                    </li>
                    <li class="item" data-rank="1" data-template-type="suggestion" data-keyword="ddp">
                        <a href="#" class="kwd">
                            <span class="fix"><span class="common_ico_kwd"><i class="imsc ico_search"></i></span><strong
                                    class="mark">dd</strong>po</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchField",
    props: {
        placeholderValue: {
            type: String,
        }
    }
};
</script>

<style lang="scss" scoped>

</style>