import css from "./Search.module.css"

// https://www.emgoto.com/react-search-bar/

const Search = () => {
    return (
        <div>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className={css["visually-hidden"]}>Search...</span>

                </label>
                <div className={css["input - container"]}>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search..."
                        name="s"
                    />
                    <i class="fas fa-search"></i>
                </div>
            </form>
        </div>
    )
}

export default Search

