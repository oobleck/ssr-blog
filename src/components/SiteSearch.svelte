<script>
  import Typeahead from "svelte-typeahead";

  export const data = [
    { state: "California" },
    { state: "North Carolina" },
    { state: "North Dakota" },
    { state: "South Carolina" },
    { state: "South Dakota" },
    { state: "Michigan" },
    { state: "Tennessee" },
    { state: "Nevada" },
    { state: "New Hampshire" },
    { state: "New Jersey" },
  ];

  export const extract = (item) => item.state;
</script>

<Typeahead {data} {extract} />

