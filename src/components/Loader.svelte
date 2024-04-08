<div id="loading"> 
    <div class="loader"> </div>
</div>

<style>
    /*___________________________________________LOADER STUFF__________________________________________*/
    #loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 6;
        overflow: hidden;
        transition: opacity 1s ease-in-out;
    }
    .loader {
        position: fixed;
        left: calc(50% - 5rem);
        top: calc(50% - 5rem);
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border: 1px solid transparent;
        border-top-color: #ffffffd5;
        animation: spin 1.5s linear infinite;
    }
    .loader:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 4px solid;
        border-top-color: rgb(18, 18, 18);
        animation: spin-reverse .55s linear infinite;
    }
    .loader:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: #ffffffb6;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { 
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes spin-reverse {
        0% { 
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    @media (max-width: 576px) {
        .loader {
            left: calc(50% - 4.5rem);
            top: calc(50% - 4.5rem);
            width: 9rem;
            height: 9rem;
        }
    }
    @media (max-width: 400px) {
        .loader {
            left: calc(70% - 5.25rem);
            top: calc(50% - 5.25rem);
            width: 10.5rem;
            height: 10.5rem;
        }
    }
    @media (max-width: 341px) {
        .loader {
            left: calc(70% - 4.5rem);
            top: calc(50% - 4.5rem);
            width: 9rem;
            height: 9rem;
        }
    }
</style>