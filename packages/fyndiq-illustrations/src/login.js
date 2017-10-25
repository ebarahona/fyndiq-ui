import React from 'react'
import PropTypes from 'prop-types'
import colors from 'fyndiq-styles-colors'

import styles from '../illustrations.css'

const LoginIllustration = ({ className }) => (
  <svg
    viewBox="0 0 201 200"
    className={`
      ${styles.illustration}
      ${className}
    `}
  >
    <defs>
      <path id="login1" d="M.68 100c0 55.23 44.77 100 100 100 55.22 0 100-44.77 100-100S155.9 0 100.68 0C45.45 0 .68 44.77.68 100z" />
      <path id="login3" d="M2.77.95C1.6.95.67 1.9.67 3.05c0 1.15.94 2.1 2.1 2.1h36.8c1.15 0 2.1-.95 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.76z" />
      <path id="login5" d="M2.26.95C1.4.95.68 1.9.68 3.05c0 1.15.7 2.1 1.58 2.1H30.1c.87 0 1.58-.95 1.58-2.1 0-1.16-.7-2.1-1.6-2.1H2.27z" />
      <path id="login7" d="M2.7.83C1.52.83.6 1.77.6 2.93c0 1.15.93 2.1 2.1 2.1h42.15c1.16 0 2.1-.95 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.7z" />
      <path id="login9" d="M2.62.83c-1.16 0-2.1.94-2.1 2.1 0 1.15.94 2.1 2.1 2.1h16.83c1.16 0 2.1-.95 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.6z" />
      <path id="login11" d="M2.35.83c-1.16 0-2.1.94-2.1 2.1 0 1.15.94 2.1 2.1 2.1h34.1c1.15 0 2.1-.95 2.1-2.1 0-1.16-.95-2.1-2.1-2.1H2.34z" />
      <path id="login13" d="M2.27.83c-1.16 0-2.1.94-2.1 2.1 0 1.15.94 2.1 2.1 2.1h42.2c1.17 0 2.1-.95 2.1-2.1 0-1.16-.93-2.1-2.1-2.1H2.28z" />
      <path id="login15" d="M2.5.95C1.33.95.4 1.9.4 3.05c0 1.15.94 2.1 2.1 2.1h38.88c1.16 0 2.1-.95 2.1-2.1 0-1.16-.94-2.1-2.1-2.1H2.48z" />
      <path id="login17" d="M3.28.95C1.68.95.4 1.9.4 3.05c0 1.15 1.3 2.1 2.88 2.1h53.5c1.6 0 2.9-.95 2.9-2.1 0-1.16-1.3-2.1-2.9-2.1H3.3z" />
      <path id="login19" d="M20.68 11.15C22.8 5 28.65.8 35.18.8c8.47 0 15.35 6.87 15.35 15.34 0 .66-.05 1.32-.14 1.97 5.03 1.13 8.65 5.6 8.65 10.8 0 6.13-4.97 11.1-11.1 11.1h-36.2C5.66 40 .7 35.03.7 28.9c0-4.34 2.54-8.25 6.48-10.05-.05-.37-.1-.74-.1-1.12 0-4.64 3.78-8.42 8.43-8.42 1.9 0 3.7.68 5.18 1.85zm14.5-7.35c-5.4 0-10.28 3.63-11.82 8.8-.25.85-.92 1.5-1.77 1.74-.24.06-.47.1-.7.1-.64 0-1.26-.25-1.74-.7-1-.92-2.3-1.42-3.67-1.42-1.5 0-2.85.6-3.84 1.6-.98.97-1.6 2.32-1.6 3.8 0 .33.04.64.1.95.02.14.03.3.03.43 0 1.03-.62 1.96-1.57 2.37-3 1.27-4.95 4.2-4.95 7.45 0 2.22.9 4.23 2.37 5.7C7.52 36.1 9.53 37 11.75 37h36.2c2.24 0 4.25-.9 5.72-2.38 1.47-1.47 2.37-3.48 2.37-5.7 0-3.9-2.77-7.24-6.6-7.95-1.23-.23-2.1-1.3-2.1-2.52l.03-.4c.1-.63.15-1.27.15-1.9 0-3.42-1.38-6.5-3.62-8.73-2.23-2.24-5.3-3.62-8.7-3.62zM49.98 18v.02H50zm-42.53.7zm-.26.48z" />
      <path id="login21" d="M.1 5.67C.1 2.6 2.6.1 5.7.1c3.07 0 5.57 2.5 5.57 5.57 0 2.4-1.56 4.46-3.72 5.22v13.34c0 1.02-.83 1.86-1.85 1.86-1.03 0-1.86-.84-1.86-1.86V10.9C1.66 10.13.12 8.07.12 5.66zm3.72 0c0 1.02.83 1.85 1.86 1.85 1.02 0 1.85-.83 1.85-1.85 0-1.03-.83-1.86-1.85-1.86-1.03 0-1.86.84-1.86 1.87z" />
      <path id="login23" d="M8.58 1.98C8.58 5.6 5.63 8.56 2 8.56c-.72 0-1.3.58-1.3 1.3 0 .74.58 1.33 1.3 1.33 5.08 0 9.2-4.14 9.2-9.22 0-.73-.58-1.3-1.3-1.3-.73 0-1.32.57-1.32 1.3z" />
      <path id="login25" d="M27.15 1.06c-.15.3-3.73 7.16-11.97 7.16S3.36 1.37 3.2 1.06C2.88.4 2.1.16 1.44.46.8.8.54 1.6.84 2.25c.2.35 4.43 8.6 14.34 8.6 9.9 0 14.14-8.25 14.32-8.6.32-.65.06-1.44-.6-1.77-.17-.1-.38-.14-.58-.14-.48 0-.94.27-1.17.73z" />
      <path id="login27" d="M4.7 19.1C10.65 7.76 22.53 0 36.18 0 49.83 0 61.7 7.76 67.64 19.1l.1.17c2.5 4.87 3.94 10.38 3.94 16.23 0 19.57-15.93 35.5-35.5 35.5C16.6 71 .68 55.07.68 35.5c0-5.85 1.43-11.36 3.94-16.23.02-.06.06-.1.1-.17zM36.18 2.63C24.3 2.63 13.9 8.95 8.1 18.4h56.14C58.46 8.96 48.04 2.64 36.18 2.64zm14.1 36.78c-.3.03-.6.04-.92.04-4.83 0-9.4-2.42-12.1-6.48-.48-.74-1.67-.74-2.16 0-2.87 4.32-7.86 6.8-13.03 6.45-7.57-.48-13.5-7-13.5-14.87v-3.5h-1.9C4.52 25.42 3.3 30.32 3.3 35.5c0 18.12 14.75 32.87 32.88 32.87 18.12 0 32.87-14.75 32.87-32.87 0-5.2-1.22-10.1-3.37-14.46h-1.9v3.5c0 7.85-5.93 14.38-13.5 14.87zm10.9-18.36H11.2v3.5c0 6.46 4.85 11.85 11.04 12.25 4.24.27 8.32-1.76 10.66-5.3.73-1.1 1.95-1.75 3.28-1.75 1.32 0 2.54.66 3.27 1.76 2.34 3.54 6.43 5.57 10.66 5.3 6.2-.4 11.06-5.8 11.06-12.27v-3.5z" />
      <path id="login29" d="M8.3 1.98c0 3.63-2.96 6.58-6.6 6.58-.71 0-1.3.58-1.3 1.3 0 .74.58 1.33 1.3 1.33 5.1 0 9.2-4.14 9.2-9.22 0-.73-.57-1.3-1.3-1.3-.73 0-1.3.57-1.3 1.3z" />
      <path id="login31" d="M20.36 9.6C21.9 4.44 26.78.8 32.16.8h.03c3.4 0 6.46 1.38 8.7 3.62 2.24 2.24 3.62 5.3 3.62 8.72 0 .64-.05 1.28-.15 1.9l-.02.4c0 1.23.86 2.3 2.1 2.53 3.8.7 6.6 4.05 6.6 7.94 0 2.24-.9 4.25-2.38 5.72C49.2 33.1 47.2 34 44.97 34H8.76c-2.24 0-4.25-.9-5.72-2.38C1.6 30.15.7 28.14.68 25.92c0-3.26 1.94-6.18 4.94-7.45.96-.4 1.57-1.34 1.57-2.36 0-.14-.02-.3-.05-.43-.05-.3-.08-.62-.08-.94 0-1.5.6-2.84 1.6-3.82.98-.98 2.32-1.58 3.82-1.58 1.36 0 2.65.5 3.66 1.43.48.44 1.1.7 1.74.7.23 0 .46-.05.68-.1.86-.25 1.53-.9 1.78-1.75zm-1.77 1.74h-.02zm-.02 0z" />
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="Graphics" transform="translate(-.332 .313)">
        <g id="Group-3">
          <mask id="loginmask2" fill={colors.white}>
            <use xlinkHref="#login1" />
          </mask>
          <path id="Fill-1" fill={colors.palegrey} d="M-4.32 205h210V-5h-210z" mask="url(#loginmask2)" />
        </g>
        <g id="Group-6" transform="translate(4 166)">
          <mask id="loginmask4" fill={colors.white}>
            <use xlinkHref="#login3" />
          </mask>
          <path id="Fill-4" fill={colors.border} d="M-4.32 10.14h50.98v-14.2H-4.32z" mask="url(#loginmask4)" />
        </g>
        <g id="Group-9" transform="translate(51 166)">
          <mask id="loginmask6" fill={colors.white}>
            <use xlinkHref="#login5" />
          </mask>
          <path id="Fill-7" fill={colors.border} d="M-3.1 10.14h38.56v-14.2H-3.1z" mask="url(#loginmask6)" />
        </g>
        <g id="Group-12" transform="translate(20 174)">
          <mask id="loginmask8" fill={colors.white}>
            <use xlinkHref="#login7" />
          </mask>
          <path id="Fill-10" fill={colors.border} d="M-4.4 10.03h56.34v-14.2H-4.4z" mask="url(#loginmask8)" />
        </g>
        <g id="Group-15" transform="translate(71 174)">
          <mask id="loginmask10" fill={colors.white}>
            <use xlinkHref="#login9" />
          </mask>
          <path id="Fill-13" fill={colors.border} d="M-4.48 10.03h31.03v-14.2H-4.48z" mask="url(#loginmask10)" />
        </g>
        <g id="Group-18" transform="translate(97 174)">
          <mask id="loginmask12" fill={colors.white}>
            <use xlinkHref="#login11" />
          </mask>
          <path id="Fill-16" fill={colors.border} d="M-4.75 10.03h48.3v-14.2h-48.3z" mask="url(#loginmask12)" />
        </g>
        <g id="Group-21" transform="translate(139 174)">
          <mask id="loginmask14" fill={colors.white}>
            <use xlinkHref="#login13" />
          </mask>
          <path id="Fill-19" fill={colors.border} d="M-4.83 10.03h56.4v-14.2h-56.4z" mask="url(#loginmask14)" />
        </g>
        <g id="Group-24" transform="translate(153 166)">
          <mask id="loginmask16" fill={colors.white}>
            <use xlinkHref="#login15" />
          </mask>
          <path id="Fill-22" fill={colors.border} d="M-4.6 10.14h53.08v-14.2H-4.6z" mask="url(#loginmask16)" />
        </g>
        <g id="Group-27" transform="translate(88 166)">
          <mask id="loginmask18" fill={colors.white}>
            <use xlinkHref="#login17" />
          </mask>
          <path id="Fill-25" fill={colors.border} d="M-6.48 10.14h73.04v-14.2H-6.48z" mask="url(#loginmask18)" />
        </g>
        <g id="Group-33" transform="translate(33 30)">
          <mask id="loginmask20" fill={colors.white}>
            <use xlinkHref="#login19" />
          </mask>
          <path id="Fill-31" fill={colors.border} d="M-6.84 47.52h73.4V-6.73h-73.4z" mask="url(#loginmask20)" />
        </g>
        <g id="Group-42">
          <path id="Fill-34" fill={colors.white} d="M107.3 104.78c0 2.37-1.92 4.3-4.3 4.3-2.37 0-4.3-1.93-4.3-4.3 0-2.38 1.93-4.3 4.3-4.3 2.38 0 4.3 1.92 4.3 4.3" />
          <path id="Fill-36" fill={colors.border} d="M137.96 80.52v55.72c0 2.04-1.66 3.7-3.7 3.7H71.1c-2.04 0-3.7-1.66-3.7-3.7V80.52h70.56z" />
          <path id="Fill-38" fill={colors.black} d="M126.82 76.8v-9.28c0-13.3-10.83-24.14-24.14-24.14-13.32 0-24.14 10.83-24.14 24.14v9.3h48.28zm11.14 59.44V80.52H67.4v55.72c0 2.04 1.66 3.7 3.7 3.7h63.15c2.05 0 3.7-1.66 3.7-3.7zm3.72-57.57v57.57c0 4.1-3.33 7.42-7.43 7.42H71.1c-4.1 0-7.42-3.33-7.42-7.42V78.67c0-1.03.83-1.86 1.85-1.86h9.3v-9.28c0-15.35 12.48-27.85 27.85-27.85 15.36 0 27.85 12.5 27.85 27.85v9.3h9.3c1 0 1.85.82 1.85 1.85z" />
          <path id="Fill-40" fill={colors.black} d="M100.82 109.9v13.34c0 1.02.83 1.85 1.86 1.85 1.02 0 1.85-.84 1.85-1.86V109.9c2.16-.77 3.72-2.82 3.72-5.23 0-3.08-2.5-5.58-5.57-5.58-3.08 0-5.58 2.5-5.58 5.57 0 2.4 1.56 4.46 3.72 5.23m1.86-7.1c1.02 0 1.85.84 1.85 1.87 0 1.02-.83 1.85-1.85 1.85-1.03 0-1.86-.83-1.86-1.85 0-1.03.83-1.86 1.86-1.86" />
        </g>
        <ellipse id="Oval" cx="103.5" cy="105" fill={colors.white} rx="3.5" ry="4" />
        <g id="Group-45" transform="translate(97 99)">
          <mask id="loginmask22" fill={colors.white}>
            <use xlinkHref="#login21" />
          </mask>
          <path id="Fill-43" fill={colors.black} d="M-9.18 35.38h29.7V-9.2h-29.7z" mask="url(#loginmask22)" />
        </g>
        <g id="Group-50">
          <path id="Fill-46" fill={colors.white} d="M149.4 45.4c18.06 5.7 28.12 25.04 22.42 43.1-5.7 18.05-25.04 28.1-43.1 22.4-18.04-5.7-28.1-25.03-22.38-43.08 5.7-18.06 25.02-28.1 43.07-22.4" />
          <path id="Fill-48" fill={colors.black} d="M152 77.2c-.72 0-1.3-.6-1.3-1.33 0-.73.58-1.3 1.3-1.3 3.63 0 6.58-2.96 6.58-6.6 0-.72.6-1.3 1.32-1.3.72 0 1.3.58 1.3 1.3 0 5.1-4.12 9.22-9.2 9.22" />
        </g>
        <g id="Group-53" transform="translate(150 66)">
          <mask id="loginmask24" fill={colors.white}>
            <use xlinkHref="#login23" />
          </mask>
          <path id="Fill-51" fill={colors.black} d="M-5.88 17.76H17.8V-5.9H-5.9z" mask="url(#loginmask24)" />
        </g>
        <path id="Fill-54" fill={colors.black} d="M152.9 90.48c-.63-.33-1.42-.07-1.75.58-.15.3-3.73 7.16-11.97 7.16s-11.82-6.85-11.98-7.16c-.32-.65-1.1-.9-1.76-.6-.65.34-.9 1.13-.6 1.78.2.35 4.43 8.6 14.34 8.6 9.9 0 14.14-8.25 14.32-8.6.32-.65.06-1.44-.6-1.76" />
        <g id="Group-58" transform="translate(124 90)">
          <mask id="loginmask26" fill={colors.white}>
            <use xlinkHref="#login25" />
          </mask>
          <path id="Fill-56" fill={colors.black} d="M-5.86 17.43H36.2V-6.24H-5.85z" mask="url(#loginmask26)" />
        </g>
        <path id="Fill-59" fill={colors.black} d="M170.64 62.1C164.7 50.76 152.84 43 139.18 43s-25.54 7.76-31.47 19.1c-.02.06-.06.1-.08.17-2.5 4.87-3.94 10.38-3.94 16.23 0 19.57 15.92 35.5 35.5 35.5 19.57 0 35.5-15.93 35.5-35.5 0-5.85-1.43-11.36-3.95-16.23-.02-.06-.05-.1-.1-.17zm-31.46-16.47c11.86 0 22.28 6.32 28.06 15.78H111.1c5.8-9.45 16.2-15.77 28.08-15.77zm-25 18.4h49.98v3.5c0 6.47-4.85 11.86-11.04 12.26-4.24.27-8.33-1.76-10.66-5.3-.74-1.1-1.96-1.75-3.28-1.75-1.32 0-2.55.66-3.28 1.76-2.34 3.54-6.42 5.57-10.66 5.3-6.2-.4-11.04-5.8-11.04-12.27v-3.5zm25 47.34c-18.13 0-32.87-14.75-32.87-32.87 0-5.2 1.22-10.1 3.37-14.46h1.9v3.5c0 7.85 5.93 14.38 13.5 14.87 5.17.36 10.16-2.12 13.02-6.44.48-.74 1.67-.74 2.16 0 2.7 4.06 7.26 6.48 12.1 6.48.3 0 .6 0 .92-.03 7.58-.48 13.5-7 13.5-14.87v-3.5h1.9c2.15 4.38 3.37 9.28 3.37 14.47 0 18.12-14.75 32.87-32.87 32.87z" />
        <g id="Group-63" transform="translate(103 43)">
          <mask id="loginmask28" fill={colors.white}>
            <use xlinkHref="#login27" />
          </mask>
          <path id="Fill-61" fill={colors.black} d="M-5.9 77.57h84.15V-6.57H-5.9z" mask="url(#loginmask28)" />
        </g>
        <path id="Fill-64" fill={colors.black} d="M125.7 77.2c-.72 0-1.3-.6-1.3-1.33 0-.73.58-1.3 1.3-1.3 3.64 0 6.6-2.96 6.6-6.6 0-.72.57-1.3 1.3-1.3.73 0 1.32.58 1.32 1.3 0 5.1-4.13 9.22-9.2 9.22" />
        <g id="Group-68" transform="translate(124 66)">
          <mask id="loginmask30" fill={colors.white}>
            <use xlinkHref="#login29" />
          </mask>
          <path id="Fill-66" fill={colors.black} d="M-6.18 17.76H17.5V-5.9H-6.2z" mask="url(#loginmask30)" />
        </g>
        <g id="Group-30" transform="translate(36 33)">
          <mask id="loginmask32" fill={colors.white}>
            <use xlinkHref="#login31" />
          </mask>
          <path id="Fill-28" fill={colors.white} d="M-6.83 41.5h67.4V-6.7h-67.4z" mask="url(#loginmask32)" />
        </g>
      </g>
    </g>
  </svg>
)

LoginIllustration.propTypes = {
  className: PropTypes.string,
}

LoginIllustration.defaultProps = {
  className: '',
}

export default LoginIllustration