module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A vue-common project"
    },
    "author": {
      "type": "string",
      "message": "author"
    },
    "promise_polyfill": {
      "type": "confirm",
      "message": "是否使用promise垫片？（推荐使用）"
    },
    "track": {
      "type": "confirm",
      "message": "是否引入埋点tracker.js？"
    },
    "link_passport": {
      "type": "confirm",
      "message": "是否引入passport.js？"
    }
  },
  "filters": {
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
};
