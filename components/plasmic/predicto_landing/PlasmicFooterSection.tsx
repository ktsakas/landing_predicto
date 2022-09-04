// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dUogsiK6TRssLNH9SokuDi
// Component: Ce_KVVdS0JC1p6
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
import Logo from "../../Logo"; // plasmic-import: yo25M4iqA_VNf/component
import Button from "../../Button"; // plasmic-import: 0OtwdvXGHhRRX/component

import { useScreenVariants as useScreenVariantsgwfRdJeOnv5Uf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _GwfRdJeOnv5UF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_predicto_landing.module.css"; // plasmic-import: dUogsiK6TRssLNH9SokuDi/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: Ce_KVVdS0JC1p6/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: tpJKAcS7AFpbjS/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: Gty6V4opDvwhFw/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: G65opVTPncmhng/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: EuIMX5jujNIM5n/icon

export type PlasmicFooterSection__VariantMembers = {};

export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vNy0W)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__gEqWr)}>
            <div className={classNames(projectcss.all, sty.freeBox__gcIqX)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vyQkd
                )}
              >
                {"Keep up with crypto & stocks in no time."}
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__zsStZ)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__nbBE)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__qV8K6)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__lzHXp)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg__i6Qfe)}
                  role={"img"}
                />
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__rxSr0)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__zrg8K
              )}
            >
              {"Menu"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__fvgEv)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__idkIn)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___2S8I2)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kenE7
                )}
              >
                {"Product"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___6K8Tp)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fcQ4Q)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hU5AQ)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__f0Z5Q
                )}
              >
                {"Purchase"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__clufQ)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xxu6)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xjzqe)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kLXhd
                )}
              >
                {"How it Work"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__aZvj)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__pB40R)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jibm)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oB8LD
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>

          <div className={classNames(projectcss.all, sty.column___1KrPv)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__olFiT
              )}
            >
              {"Help"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__xITug)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jsWxh)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__sV9E)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9Vx4M
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__d2Hf4)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hbycI)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__q1K1N)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7E8Nl
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>

          <div className={classNames(projectcss.all, sty.column__ov55Y)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__zoQdH
              )}
            >
              {"Company"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__dxPhX)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ly3S1)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___0F0Wy)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__njOwj
                )}
              >
                {"Our Team"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___1O4Qq)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__nvqJa)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__k1A2B)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__m90X
                )}
              >
                {"Partner with us"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___5EZcl)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xfpJr)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fl69M)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l6Utg
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__xojvy)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gf6Yl
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
