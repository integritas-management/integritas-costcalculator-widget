<svelte:options tag="spreadm8-calc"/>
<script lang="ts">
    import {onMount, onDestroy} from 'svelte';
    import 'date-input-polyfill';
    // a polyfill for the input[type="date"]
    // element to work in all browsers - that
    // solution is still smaller than including
    // a whole library like lightpick or flatpickr

    const BACKEND_URL = "https://ec2-13-40-87-137.eu-west-2.compute.amazonaws.com";
    const CORS_ERROR_CODE = "CORS_ERROR";

    type modeType = "light" | "dark" | "auto";

    // Props
    export let mode: modeType = "auto"

    export let height: string = "100%";
    export let width: string = "100%";

    export let light_mode_background = '#ffffff';
    export let dark_mode_background = "#1f2937";

    export let light_mode_text_color = '#1f2937';
    export let dark_mode_text_color = '#f9fafb';


    export let dark_mode_input_background = '#374151';
    export let light_mode_input_background = '#f9fafb';


    export let dark_mode_button_color = '#374151';
    export let light_mode_button_color = '#f9fafb';

    export let light_mode_border_color = '#D1D5DB';
    export let dark_mode_border_color = '#374151';

    export let light_mode_button_text_color = '#1f2937';
    export let dark_mode_button_text_color = '#f9fafb';

    export let border_radius = '15px';

    export let input_border_radius = '5';

    export let shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl" = "md"
    export let opacity: number = 100;

    export let name = "Our Results";

    export let show_interbank_rate: string = "false";

    export let show_email_input: string = "true";

    export let spread: number = 0;
    // end of props

    $: shouldShowEmail = show_email_input === "true";
    $: shouldShowInterbankRate = show_interbank_rate === "true";


    function calculateIsDarkMode(mode: modeType) {
        if (mode === 'dark') return true;
        if (mode === 'light') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    $: isDarkMode = calculateIsDarkMode(mode);

    // Function to fetch data on component mount
    async function fetchDataOnMount() {
        const CORS_ERROR_CODE = 'CORS_ERROR'; // Assuming you have defined this elsewhere

        try {
            const response = await fetch(`${BACKEND_URL}/`);

            if (!response.ok) {
                // Handle HTTP response errors
                if (response.status === 403) {
                    throw new Error(CORS_ERROR_CODE);
                } else {
                    throw new Error("We're sorry, our servers are currently down. Please try again later.");
                }
            }

            // If you need to process the response data, you can do it here
            // const data = await response.json();

        } catch (error) {
            // Handle the error according to your needs
            if (error.message === CORS_ERROR_CODE) {
                // Handle CORS error
                statusCheckError = CORS_ERROR_CODE;
            } else {
                // Handle other errors
                statusCheckError = error.message;
            }
        }
    }



    const fetcher = async (data: any) => {
        return fetch(`${BACKEND_URL}/widget/calculate`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer whatever",
            },
            body: JSON.stringify(data),
        })
    }
    onMount(() => {
        fetchDataOnMount();
    });


    let backendData: any = undefined;
    let isIdle = true;
    let error: any = undefined;
    let isFetching = false;

    let statusCheckError: any = undefined;

    const resetForm = () => {
        backendData = undefined;
        isIdle = true;
        error = false;
        isFetching = false;
    }

    const mutate = async (formData: any) => {
        isIdle = false;
        isFetching = true;
        error = undefined;

        try {
            const res = await fetcher(formData);

            if (!res.ok) {
                // Read the error message from the response body
                const errorRes = await res.json();
                throw new Error(errorRes || `HTTP error! Status: ${res.status}`);
            }

            const jsonRes = await res.json();
            isFetching = false;
            error = undefined;
            isIdle = false;
            backendData = jsonRes;
        } catch (e) {
            isFetching = false;
            error = e.message; // Set the error state variable to the error message
            isIdle = false;
            backendData = undefined;
        }
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        data["prospect"] = "";
        // Provide the value below if we need to give users
        // the option to change the spread via widget
        data["input_spread"] = spread.toString();
        data["prospect_annual_flow"] = "";
        data["email_user"] = false;
        if (!shouldShowEmail) {
            data["user"] = "testUserWithoutMail@gmail.com"
        }
        void mutate(data)
    }


    // Function to handle changes in dark mode preference
    const handleDarkModeChange = (event) => {
        isDarkMode = event.matches;
    };

    // Add a listener for changes in dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    onDestroy(() => {
        // Cleanup listeners to avoid memory leaks
        darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    });


    let background: string, text_color: string, input_background: string, button_color: string;
    $: background = isDarkMode ? dark_mode_background : light_mode_background;
    $: text_color = isDarkMode ? dark_mode_text_color : light_mode_text_color;
    $: input_background = isDarkMode ? dark_mode_input_background : light_mode_input_background;
    $: input_border_color = isDarkMode ? dark_mode_border_color : light_mode_border_color;
    $: button_color = isDarkMode ? dark_mode_button_color : light_mode_button_color;
    $: button_text_color = isDarkMode ? dark_mode_button_text_color : light_mode_button_text_color;
    $: input_style = `
    background-color: ${input_background};
    color: ${text_color};
    border-width: 1px;
    border-color: ${input_border_color};
    border-radius: ${input_border_radius}px;
    `
    $: button_style = `
    width: 100%;
    background-color: ${button_color};
    color: ${button_text_color};
    border-width: 1px;
    border-color: ${input_border_color};
    border-radius: ${input_border_radius}px;
    `
</script>
<!--Import Google Font for the 'Inter' font-->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>


<!-- Render an initial error message if an error occurred during the initial fetch -->
{#if statusCheckError}
    <div class={`p-4 shadow-${shadow}`} style={`
        background-color: ${background};
        border-radius: ${border_radius};
        color: ${text_color};
        opacity: ${opacity}%!important;
        height: ${height};
        width: ${width};
`}>

        <div class="flex flex-col items-center gap-4">
            <h1 class="text-2xl">An error occured</h1>
            {#if statusCheckError === CORS_ERROR_CODE}
                <div>
                    <p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/"
                                                                                     target="_blank"
                                                                                     rel="noreferrer"
                                                                                     style="text-decoration: underline">click
                        here</a> to activate your widget.</p>
                </div>
            {:else}
                <p class="text-sm">{statusCheckError}</p>
            {/if}
        </div>
    </div>
{:else}
    <div class={`p-12 shadow-${shadow}`} style={`
        background-color: ${background};
        border-radius: ${border_radius};
        color: ${text_color};
        opacity: ${opacity}%!important;
        height: ${height};
        width: ${width};
`}>
        {#if isIdle || isFetching}
            <form on:submit={handleFormSubmit}>
                <div class="flex flex-col sm:gap-4">
                    <div class="flex flex-col sm:flex-row sm:justify-around sm:gap-12">
                        <div class="w-full">
                            <label for="date">Select Date</label>
                            <input id="date" type="date" class="w-full rounded-md px-3 py-2 mt-4" name="date"
                                   placeholder="Select date" required style={input_style}/>
                        </div>
                        <div class="w-full">
                            <label for="time">Select Time</label>
                            <input id="time" type="time" class="w-full rounded-md px-3 py-2 mt-4" name="time"
                                   placeholder="Select Time" required style={input_style}/>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                        <div class="w-full">
                            <label for="sold_notional">Sell Amount</label>
                            <input id="sold_notional" type="number" step=".01"
                                   class="w-full rounded-md px-3 py-2 mt-4" name="sold_notional" placeholder="10000"
                                   required style={input_style}/>
                        </div>
                        <div class="w-full">
                            <label for="sold_ccy" style="color: {text_color}">Sell Currency</label>
                            <select name="sold_ccy" id="sold_ccy" class="w-full rounded-md px-3 py-2 mt-4" required
                                    style={input_style}>
                                <option selected>GBP</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>JPY</option>
                                <option>CHF</option>
                                <option>CNY</option>
                                <option>NZD</option>
                                <option>SGD</option>
                                <option>INR</option>
                                <option>AUD</option>
                                <option>CAD</option>
                                <option>HKD</option>
                                <option>MYR</option>
                                <option>NOK</option>
                                <option>ZAR</option>
                                <option>RUB</option>
                                <option>SEK</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                        <div class="w-full">
                            <label for="bought_notional">Buy Amount</label>
                            <input id="bought_notional" type="number" step=".01"
                                   class="w-full rounded-md px-3 py-2 mt-4" name="bought_notional" placeholder="10000"
                                   required style={input_style}/>
                        </div>
                        <div class="w-full">
                            <label for="bought_ccy" style="color: {text_color}">Buy Currency</label>
                            <select name="bought_ccy" id="bought_ccy" class="w-full rounded-md px-3 py-2 mt-4"
                                    required style={input_style}>
                                <option selected>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                                <option>JPY</option>
                                <option>CHF</option>
                                <option>CNY</option>
                                <option>NZD</option>
                                <option>SGD</option>
                                <option>INR</option>
                                <option>AUD</option>
                                <option>CAD</option>
                                <option>HKD</option>
                                <option>MYR</option>
                                <option>NOK</option>
                                <option>ZAR</option>
                                <option>RUB</option>
                                <option>SEK</option>
                            </select>
                        </div>
                    </div>

                    {#if shouldShowEmail}
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                            <div class="w-full">
                                <label for="user">Email</label>
                                <input id="user" type="email"
                                       class="w-full rounded-md px-3 py-2 mt-4" name="user"
                                       placeholder="JohnDoe@email.com"
                                       required style={input_style}/>
                            </div>
                            <!--                            A div to keep the email 1/2 of the row width-->
                            <!--                            <div class="w-full"></div>-->
                        </div>
                    {/if}
                    <div>
                        <!--                                 dynamically allocate  height to take up the space when we're not rendering the email input-->

                        {#if !isFetching}
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full  items-center justify-center"
                            >
                                <button type="submit"
                                        class="px-6 py-3 mt-6"
                                        style={button_style}>See your charges
                                </button>
                            </div>
                        {:else}
                            <div class="flex flex-col sm:flex-row sm:justify-between sm:gap-12">
                                <div class="w-full">
                                    <button disabled type="button"
                                            class="px-6 py-3 mt-6 text-center inline-flex items-center justify-center"
                                            style={button_style}>
                                        <svg aria-hidden="true" role="status"
                                             class="inline w-4 h-4 mr-3 text-white animate-spin"
                                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                  fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                  fill="currentColor"/>
                                        </svg>
                                        Loading...
                                    </button>
                                </div>
                            </div>

                        {/if}

                    </div>
                </div>
            </form>
        {:else if backendData}
            <div class="flex flex-col divide-y gap-4" style="height: 95%;">
                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl">Your Provider </h1>
                    <p class="text-sm">Your exchange rate
                        was {backendData.data[0].third_party_exchange_rate.toFixed(2)}</p>

                    {#if shouldShowInterbankRate}
                        <p class="text-sm">The interbank rate {backendData.data[0].ccy_pair}
                            was {backendData.data[0].mid_market_rate.toFixed(2)}</p>
                    {/if}

                    <p class="text-sm">Your provider's markup was {backendData.data[0].third_party_spread}%</p>
                    <p class="text-sm">Your provider
                        charged {backendData.data[0].sold_ccy} {backendData.data[0].third_party_profit} on
                        this trade</p>
                </div>
                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl mt-4">{name}</h1>
                    <p class="text-sm">Our exchange rate was {backendData.data[0].integritas_rate.toFixed(2)}</p>
                    {#if backendData.data[0].integritas_savings > 50}
                        <p class="text-sm">We would've saved
                            you {backendData.data[0].sold_ccy} {backendData.data[0].integritas_savings.toFixed(2)}</p>
                    {/if}
                </div>
            </div>
            <div class="w-full">
                <button class="px-6 py-3"
                        on:click={() => resetForm()}
                        style={`${button_style} margin-bottom: 1.5rem;`}>Calculate again
                </button>
            </div>
        {:else if error}
            <div class="flex flex-col items-center h-full">
                <h1 class="text-2xl">Error</h1>
                <p class="text-sm py-3">{error}</p> <!-- This line will display the error message -->
                <div class="w-full mt-auto">
                    <button class="px-6 py-3 mt-6"
                            on:click={(e) => resetForm()}
                            style={button_style}>Reset Form
                    </button>
                </div>

            </div>
        {:else}
            <div class="flex flex-col items-center">
                <h1 class="text-2xl">An unknown error</h1>
                <button
                        class="rounded-lg bg-black px-6 py-3 mt-4"
                        style="background-color: {button_color}; color: {text_color}"
                        on:click={(e) => resetForm()}
                >
                    Reset Form
                </button>
            </div>
        {/if}
    </div>
{/if}


<!--Remove arrows-->
<!--  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }-->


<!--Inter style * {
        font-family: 'Inter', sans-serif;
    }-->
<style>
    * {
        font-family: 'Inter', sans-serif;
    }

    .pb-6 {
        padding-bottom: 1.5rem; /* 24px */
    }

    .h-full {
        height: 100%;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /*
! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*/

    /*
    1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
    2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
    */

    *,
    ::before,
    ::after {
        box-sizing: border-box;
        /* 1 */
        border-width: 0;
        /* 2 */
        border-style: solid;
        /* 2 */
        border-color: #e5e7eb;
        /* 2 */
    }

    ::before,
    ::after {
        --tw-content: '';
    }

    /*
    1. Use a consistent sensible line-height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    3. Use a more readable tab size.
    4. Use the user's configured `sans` font-family by default.
    5. Use the user's configured `sans` font-feature-settings by default.
    6. Use the user's configured `sans` font-variation-settings by default.
    */

    html {
        line-height: 1.5;
        /* 1 */
        -webkit-text-size-adjust: 100%;
        /* 2 */
        -moz-tab-size: 4;
        /* 3 */
        tab-size: 4;
        /* 3 */
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        /* 4 */
        font-feature-settings: normal;
        /* 5 */
        font-variation-settings: normal;
        /* 6 */
    }

    .mt-auto {
        margin-top: auto;
    }

    /*
    1. Remove the margin in all browsers.
    2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
    */
    body {
        margin: 0;
        /* 1 */
        line-height: inherit;
        /* 2 */
    }

    /*
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    3. Ensure horizontal rules are visible by default.
    */

    hr {
        height: 0;
        /* 1 */
        color: inherit;
        /* 2 */
        border-top-width: 1px;
        /* 3 */
    }

    /*
    Add the correct text decoration in Chrome, Edge, and Safari.
    */

    abbr:where([title]) {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
    }

    /*
    Remove the default font size and weight for headings.
    */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    /*
    Reset links to optimize for opt-in styling instead of opt-out.
    */

    a {
        color: inherit;
        text-decoration: inherit;
    }

    /*
    Add the correct font weight in Edge and Safari.
    */

    b,
    strong {
        font-weight: bolder;
    }

    /*
    1. Use the user's configured `mono` font family by default.
    2. Correct the odd `em` font sizing in all browsers.
    */

    code,
    kbd,
    samp,
    pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
    }

    /*
    Add the correct font size in all browsers.
    */

    small {
        font-size: 80%;
    }

    /*
    Prevent `sub` and `sup` elements from affecting the line height in all browsers.
    */

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /*
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    3. Remove gaps between table borders by default.
    */

    table {
        text-indent: 0;
        /* 1 */
        border-color: inherit;
        /* 2 */
        border-collapse: collapse;
        /* 3 */
    }

    /*
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    3. Remove default padding in all browsers.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        /* 1 */
        font-feature-settings: inherit;
        /* 1 */
        font-variation-settings: inherit;
        /* 1 */
        font-size: 100%;
        /* 1 */
        font-weight: inherit;
        /* 1 */
        line-height: inherit;
        /* 1 */
        color: inherit;
        /* 1 */
        margin: 0;
        /* 2 */
        padding: 0;
        /* 3 */
    }

    /*
    Remove the inheritance of text transform in Edge and Firefox.
    */

    button,
    select {
        text-transform: none;
    }

    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Remove default button styles.
    */

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
        /* 1 */
        background-color: transparent;
        /* 2 */
        background-image: none;
        /* 2 */
    }

    /*
    Use the modern Firefox focus style for all focusable elements.
    */

    :-moz-focusring {
        outline: auto;
    }

    /*
    Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
    */

    :-moz-ui-invalid {
        box-shadow: none;
    }

    /*
    Add the correct vertical alignment in Chrome and Firefox.
    */

    progress {
        vertical-align: baseline;
    }

    /*
    Correct the cursor style of increment and decrement buttons in Safari.
    */

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    /*
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */

    [type='search'] {
        -webkit-appearance: textfield;
        /* 1 */
        outline-offset: -2px;
        /* 2 */
    }

    /*
    Remove the inner padding in Chrome and Safari on macOS.
    */

    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to `inherit` in Safari.
    */

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        /* 1 */
        font: inherit;
        /* 2 */
    }

    /*
    Add the correct display in Chrome and Safari.
    */

    summary {
        display: list-item;
    }

    /*
    Removes the default spacing and border for appropriate elements.
    */

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
        margin: 0;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }

    legend {
        padding: 0;
    }

    ol,
    ul,
    menu {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    /*
    Reset default styling for dialogs.
    */

    dialog {
        padding: 0;
    }

    /*
    Prevent resizing textareas horizontally by default.
    */

    textarea {
        resize: vertical;
    }

    /*
    1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
    2. Set the default placeholder color to the user's configured gray 400 color.
    */

    input::placeholder,
    textarea::placeholder {
        opacity: 1;
        /* 1 */
        color: #9ca3af;
        /* 2 */
    }

    /*
    Set the default cursor for buttons.
    */

    button,
    [role="button"] {
        cursor: pointer;
    }

    /*
    Make sure disabled buttons don't get the pointer cursor.
    */

    :disabled {
        cursor: default;
    }

    /*
    1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
       This can trigger a poorly considered lint error in some tools but is included by design.
    */

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        /* 1 */
        vertical-align: middle;
        /* 2 */
    }

    /*
    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    */

    img,
    video {
        max-width: 100%;
        height: auto;
    }

    /* Make elements with the HTML hidden attribute stay hidden by default */

    [hidden] {
        display: none;
    }

    *, ::before, ::after {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia:
    }

    ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia:
    }

    .mr-3 {
        margin-right: 0.75rem
    }

    .mt-4 {
        margin-top: 1rem
    }

    .mt-6 {
        margin-top: 1.5rem
    }

    .inline {
        display: inline
    }

    .flex {
        display: flex
    }

    .inline-flex {
        display: inline-flex
    }

    .h-4 {
        height: 1rem
    }

    .w-4 {
        width: 1rem
    }

    .w-full {
        width: 100%
    }

    @keyframes spin {
        to {
            transform: rotate(360deg)
        }
    }

    .animate-spin {
        animation: spin 1s linear infinite
    }

    .flex-col {
        flex-direction: column
    }

    .items-center {
        align-items: center
    }

    .justify-center {
        justify-content: center
    }

    .gap-2 {
        gap: 0.5rem
    }

    .gap-4 {
        gap: 1rem
    }

    .divide-y > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-y-reverse: 0;
        border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width: calc(1px * var(--tw-divide-y-reverse))
    }

    .rounded-lg {
        border-radius: 0.5rem
    }

    .rounded-md {
        border-radius: 0.375rem
    }

    .bg-black {
        --tw-bg-opacity: 1;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity))
    }

    .p-4 {
        padding: 1rem
    }

    .p-12 {
        padding: 3rem;
    }

    .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem
    }

    .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }

    .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem
    }

    .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem
    }

    .text-center {
        text-align: center
    }

    .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem
    }

    .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem
    }

    .font-medium {
        font-weight: 500
    }

    .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity))
    }

    .shadow {
        --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-2xl {
        --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-none {
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-sm {
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }

    @media (min-width: 640px) {
        .sm\:flex-row {
            flex-direction: row
        }

        .sm\:justify-between {
            justify-content: space-between
        }

        .sm\:justify-around {
            justify-content: space-around
        }

        .sm\:gap-12 {
            gap: 3rem
        }

        .sm\:gap-4 {
            gap: 1rem
        }
    }

</style>