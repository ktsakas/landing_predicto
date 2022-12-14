// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dUogsiK6TRssLNH9SokuDi
// Component: hJQTjjKNw3Mh3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 0OtwdvXGHhRRX/component

import { useScreenVariants as useScreenVariantsgwfRdJeOnv5Uf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _GwfRdJeOnv5UF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_predicto_landing.module.css"; // plasmic-import: dUogsiK6TRssLNH9SokuDi/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: hJQTjjKNw3Mh3/css

export type PlasmicNavbar__VariantMembers = {};

export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgwfRdJeOnv5Uf()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mj6Gv)}
      >
        <p.PlasmicImg
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          alt={""}
          className={classNames(sty.logo)}
          displayHeight={"89px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"250px" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/predicto_landing/images/logo.png",
            fullWidth: 1927,
            fullHeight: 638,
            aspectRatio: undefined
          }}
        />

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iuKbU)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__sT4Nt)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__g9Fk5)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__t5190)}
                  role={"img"}
                />
              }
            >
              {"Features"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__mj4E3)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yOqQz)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hBhyw)}
                  role={"img"}
                />
              }
            >
              {"Pricing"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__t4C5V)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___8Facy)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__nUTiT)}
                  role={"img"}
                />
              }
            >
              {"Blog"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__ceSyx)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__i19K7)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fmw1D)}
                  role={"img"}
                />
              }
            >
              {"About us"}
            </Button>
          </p.Stack>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__joU04)}>
            <Button
              className={classNames("__wab_instance", sty.button__f0W01)}
              color={"navLink" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mwBu8)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___8MLmi)}
                  role={"img"}
                />
              }
            >
              {"Log in"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___6Uxw)}
              color={"navLinkBlue" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ogluB)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__kBo1)}
                  role={"img"}
                />
              }
            >
              {"Sign Up"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
