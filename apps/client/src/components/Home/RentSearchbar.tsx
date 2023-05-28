import { Button, Select, SimpleGrid, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function RentSearchbar() {
  let id = "inputIDWhite";
  let buttonSearch = " buttonSearchDark";

  if (document.body.style.backgroundColor === "white") {
    buttonSearch = "buttonSearchWhite";
    id = "inputIDBlack";
  }

  return (
    <div>
      <SimpleGrid cols={6} pt="30px">
        {/* <span className="placeholder col-3 placeholder-lg bg-primary">
            dadad
          </span> */}
        <Select
          id={id}
          placeholder="Property Type"
          radius={0}
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Select
          id={id}
          radius={0}
          placeholder="Area From"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Select
          id={id}
          radius={0}
          placeholder="Bedrooms"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Select
          id={id}
          radius={0}
          placeholder="Bathrooms"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Select
          id={id}
          radius={0}
          width="10px"
          placeholder="Locations"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Button
          type="submit"
          style={{ borderRadius: 0 }}
          className={`w-full py-2 px-4   ${buttonSearch}`}
        >
          <IconSearch size={rem(14)} style={{ marginRight: "3px" }} /> Search
        </Button>
      </SimpleGrid>
    </div>
  );
}
