import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { InitI18n } from "../middleware/i18n/index";
import { I18nDomainResource as getTemplateI18nResource } from "../../pages/template/i18n/index";
import { I18nDomainResource as getHomepageI18nResource } from "../../pages/homepage/i18n/index";
import { router } from "../routers/router";

const allI18nResources = [
  getTemplateI18nResource("template"),
  getHomepageI18nResource("homepage"),
];

InitI18n(allI18nResources);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
