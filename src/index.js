// plugins imports
import { initSortable } from './plugins/init_sortable';
import { initMarkdownIt } from './plugins/init_markdown_it';
import { initSelect2 } from './plugins/init_select2';

// internal js imports
import { searchMovies, fetchMovies } from './movie';

// html element select
const submit = document.querySelector("#submit");

// functions calls
fetchMovies("batman");
initSortable();
initMarkdownIt();
initSelect2();

// event listening
submit.addEventListener("click", searchMovies);
