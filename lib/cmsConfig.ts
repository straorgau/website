import {init, type CmsConfig} from "@sveltia/cms";

const config: CmsConfig = {
  load_config_file: false,
  backend: {
    name: "github",
    repo: "straorgau/policies",
    commit_messages: {
      create: `Create - {{collection}} “{{slug}}”`,
      update: `Update - {{collection}} “{{slug}}”`,
      delete: `Delete - {{collection}} “{{slug}}”`,
      uploadMedia: `Upload - “{{path}}”`,
      deleteMedia: `Delete - “{{path}}”`,
      openAuthoring: `{{message}}`
    },
  },
  media_folder: "/"
  collections: [
    {
      name: "policies",
      label: "Policies",
      label_singular: "Policy",
      folder: "/content/policies",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
          type: "date"
        },
        {
          label: "Body",
          name: "body",
          widget: "richtext"
        }
      ]
    }
  ]
};

init({ config });