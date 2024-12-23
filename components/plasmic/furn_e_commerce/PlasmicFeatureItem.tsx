// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kLKJdWcWvhmzg2QkhYCgpB
// Component: 91O5qTNY0KbN

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ProductBox } from "@plasmicpkgs/commerce";
import { ProductTextField } from "@plasmicpkgs/commerce";
import { ProductPriceComponent } from "@plasmicpkgs/commerce";
import LinkButton from "../../LinkButton"; // plasmic-import: RQcc0p_XJRvD/component
import { ProductMedia } from "@plasmicpkgs/commerce";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: kLKJdWcWvhmzg2QkhYCgpB/projectcss
import sty from "./PlasmicFeatureItem.module.css"; // plasmic-import: 91O5qTNY0KbN/css

createPlasmicElementProxy;

export type PlasmicFeatureItem__VariantMembers = {};
export type PlasmicFeatureItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatureItem__VariantsArgs;
export const PlasmicFeatureItem__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatureItem__ArgsType = {};
type ArgPropType = keyof PlasmicFeatureItem__ArgsType;
export const PlasmicFeatureItem__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatureItem__OverridesType = {
  root?: Flex__<"div">;
  productBox?: Flex__<typeof ProductBox>;
  text?: Flex__<"div">;
  productPrice?: Flex__<typeof ProductPriceComponent>;
  linkButton?: Flex__<typeof LinkButton>;
  productMedia?: Flex__<typeof ProductMedia>;
};

export interface DefaultFeatureItemProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFeatureItem__RenderFunc(props: {
  variants: PlasmicFeatureItem__VariantsArgs;
  args: PlasmicFeatureItem__ArgsType;
  overrides: PlasmicFeatureItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <ProductBox
        data-plasmic-name={"productBox"}
        data-plasmic-override={overrides.productBox}
        className={classNames("__wab_instance", sty.productBox)}
        id={"unlimited-table-collection"}
      >
        <DataCtxReader__>
          {$ctx => (
            <React.Fragment>
              <div className={classNames(projectcss.all, sty.freeBox__r00Kt)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__e47Nr)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__rqYci)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__e4Rwf)}
                  >
                    <ProductTextField
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField__vMbpd
                      )}
                      field={"name"}
                    />

                    <ProductTextField
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField__vueo9
                      )}
                      field={"description"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__ge1KD)}
                    >
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        {"Starting from "}
                      </div>
                      <ProductPriceComponent
                        data-plasmic-name={"productPrice"}
                        data-plasmic-override={overrides.productPrice}
                        className={classNames(
                          "__wab_instance",
                          sty.productPrice
                        )}
                      />
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3A7PN
                      )}
                    >
                      <LinkButton
                        data-plasmic-name={"linkButton"}
                        data-plasmic-override={overrides.linkButton}
                        className={classNames("__wab_instance", sty.linkButton)}
                        text={"View More"}
                        type={"solidOrange"}
                      />
                    </Stack__>
                  </Stack__>
                </div>
              </div>
              <ProductMedia
                data-plasmic-name={"productMedia"}
                data-plasmic-override={overrides.productMedia}
                className={classNames("__wab_instance", sty.productMedia)}
              />
            </React.Fragment>
          )}
        </DataCtxReader__>
      </ProductBox>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "productBox",
    "text",
    "productPrice",
    "linkButton",
    "productMedia"
  ],
  productBox: [
    "productBox",
    "text",
    "productPrice",
    "linkButton",
    "productMedia"
  ],
  text: ["text"],
  productPrice: ["productPrice"],
  linkButton: ["linkButton"],
  productMedia: ["productMedia"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productBox: typeof ProductBox;
  text: "div";
  productPrice: typeof ProductPriceComponent;
  linkButton: typeof LinkButton;
  productMedia: typeof ProductMedia;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatureItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatureItem__VariantsArgs;
    args?: PlasmicFeatureItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatureItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeatureItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFeatureItem__ArgProps,
          internalVariantPropNames: PlasmicFeatureItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureItem";
  } else {
    func.displayName = `PlasmicFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureItem = Object.assign(
  // Top-level PlasmicFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productBox: makeNodeComponent("productBox"),
    text: makeNodeComponent("text"),
    productPrice: makeNodeComponent("productPrice"),
    linkButton: makeNodeComponent("linkButton"),
    productMedia: makeNodeComponent("productMedia"),

    // Metadata about props expected for PlasmicFeatureItem
    internalVariantProps: PlasmicFeatureItem__VariantProps,
    internalArgProps: PlasmicFeatureItem__ArgProps
  }
);

export default PlasmicFeatureItem;
/* prettier-ignore-end */
