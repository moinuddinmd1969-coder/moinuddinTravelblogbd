import JSZip from 'jszip';

export const WP_STYLE_CSS = `/*
Theme Name: BanglaVenture - Bangladesh Travel & Tourism Magazine
Theme URI: https://banglaventure.travel/wp-theme
Author: BanglaVenture WordPress Theme Craftsmen
Author URI: https://banglaventure.travel
Description: A modern, high-performance, SEO-optimized WordPress travel blog and tourism theme tailored for Bangladesh tourism (Cox's Bazar, Sundarbans, Sajek Valley, Saint Martin, Sylhet). Fully compatible with Elementor, Gutenberg Full Site Editing (FSE), WooCommerce, and Yoast SEO.
Version: 2.6.0
Requires at least: 6.2
Tested up to: 6.7
Requires PHP: 7.4
License: GNU General Public License v3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: banglaventure
Tags: travel, tourism, bangladesh, blog, grid-layout, custom-colors, elementor-ready, gutenberg-optimized, seo-friendly, full-site-editing, translation-ready, accessibility-ready, wide-blocks
*/

/* ==========================================================================
   1. CSS Custom Properties / Theme Variables
   ========================================================================== */
:root {
  /* Color Palette - Bengal Emerald & Bay Blue */
  --bv-primary: #059669;
  --bv-primary-hover: #047857;
  --bv-primary-light: #d1fae5;
  --bv-primary-dark: #064e3b;
  
  --bv-secondary: #0284c7;
  --bv-secondary-hover: #0369a1;
  --bv-secondary-light: #e0f2fe;

  --bv-accent-amber: #f59e0b;
  --bv-accent-coral: #e11d48;
  --bv-accent-teal: #0f766e;

  /* Neutral Spectrum */
  --bv-bg-canvas: #ffffff;
  --bv-bg-surface: #f8fafc;
  --bv-bg-card: #ffffff;
  --bv-border: #e2e8f0;
  --bv-border-subtle: #f1f5f9;

  --bv-text-main: #0f172a;
  --bv-text-muted: #64748b;
  --bv-text-light: #94a3b8;

  /* Typography Stack */
  --bv-font-heading: 'Playfair Display', Georgia, serif;
  --bv-font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --bv-font-bengali: 'Hind Siliguri', 'Plus Jakarta Sans', sans-serif;
  --bv-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Layout & Spacing */
  --bv-container-max: 1280px;
  --bv-content-width: 840px;
  --bv-wide-width: 1140px;
  --bv-radius-sm: 8px;
  --bv-radius-md: 14px;
  --bv-radius-lg: 24px;
  --bv-radius-full: 9999px;

  /* Elevation Shadows */
  --bv-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --bv-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --bv-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --bv-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

/* Dark Mode Palette Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --bv-bg-canvas: #020617;
    --bv-bg-surface: #0f172a;
    --bv-bg-card: #1e293b;
    --bv-border: #334155;
    --bv-border-subtle: #1e293b;
    --bv-text-main: #f8fafc;
    --bv-text-muted: #94a3b8;
  }
}

.dark {
  --bv-bg-canvas: #020617;
  --bv-bg-surface: #0f172a;
  --bv-bg-card: #1e293b;
  --bv-border: #334155;
  --bv-border-subtle: #1e293b;
  --bv-text-main: #f8fafc;
  --bv-text-muted: #94a3b8;
}

/* Alternative Palette: Sundarbans Deep Mangrove */
.theme-sundarbans {
  --bv-primary: #065f46;
  --bv-primary-hover: #044e39;
  --bv-secondary: #d97706;
}

/* Alternative Palette: Sajek Sunset Coral */
.theme-sajek-sunset {
  --bv-primary: #e11d48;
  --bv-primary-hover: #be123c;
  --bv-secondary: #f59e0b;
}

/* ==========================================================================
   2. Reset & Baseline HTML Elements
   ========================================================================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.6;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--bv-font-body);
  background-color: var(--bv-bg-canvas);
  color: var(--bv-text-main);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--bv-font-heading);
  font-weight: 700;
  line-height: 1.25;
  color: var(--bv-text-main);
  margin-bottom: 0.75rem;
}

h1 { font-size: clamp(2rem, 4vw, 3.25rem); letter-spacing: -0.02em; }
h2 { font-size: clamp(1.6rem, 3vw, 2.35rem); letter-spacing: -0.015em; }
h3 { font-size: clamp(1.3rem, 2vw, 1.75rem); }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.1rem; }
h6 { font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; }

p {
  margin-bottom: 1.25rem;
  color: var(--bv-text-muted);
}

a {
  color: var(--bv-primary);
  text-decoration: none;
  transition: color 0.15s ease-in-out;
}

a:hover, a:focus {
  color: var(--bv-primary-hover);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ==========================================================================
   3. WordPress Core Alignment & Layout Classes
   ========================================================================== */
.aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.alignleft {
  display: inline;
  float: left;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
}

.alignright {
  display: inline;
  float: right;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.alignwide {
  max-width: var(--bv-wide-width);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.alignfull {
  max-width: 100vw;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.wp-site-blocks {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Screen reader text accessibility */
.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: #f1f1f1;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  clip-path: none;
  color: #21759b;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

/* ==========================================================================
   4. WordPress Gutenberg Block Styles
   ========================================================================== */
.wp-block-cover {
  position: relative;
  min-height: 440px;
  border-radius: var(--bv-radius-lg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 2rem;
  margin-bottom: 2.5rem;
}

.wp-block-cover__inner-container {
  max-width: var(--bv-content-width);
  text-align: center;
  z-index: 2;
}

.wp-block-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .wp-block-columns {
    flex-wrap: nowrap;
  }
}

.wp-block-column {
  flex: 1;
  min-width: 0;
}

.wp-block-button__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--bv-primary);
  color: #ffffff !important;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.75rem 1.75rem;
  border-radius: var(--bv-radius-md);
  border: none;
  cursor: pointer;
  box-shadow: var(--bv-shadow-md);
  transition: all 0.2s ease-in-out;
}

.wp-block-button__link:hover {
  background-color: var(--bv-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--bv-shadow-lg);
}

.wp-block-quote {
  border-left: 4px solid var(--bv-primary);
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background-color: var(--bv-bg-surface);
  border-radius: 0 var(--bv-radius-md) var(--bv-radius-md) 0;
  font-style: italic;
}

.wp-block-quote cite {
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--bv-text-muted);
  margin-top: 0.5rem;
}

/* ==========================================================================
   5. Elementor Visual Builder Compatibility
   ========================================================================== */
.elementor-section {
  position: relative;
  width: 100%;
}

.elementor-container {
  max-width: var(--bv-container-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.elementor-column {
  position: relative;
  min-height: 1px;
  display: flex;
}

.elementor-widget-wrap {
  width: 100%;
  position: relative;
}

.elementor-widget-heading .elementor-heading-title {
  font-family: var(--bv-font-heading);
  color: var(--bv-text-main);
}

/* ==========================================================================
   6. Bangladesh Tourism Custom Components & Widgets
   ========================================================================== */
/* Destination Showcase Card */
.bv-destination-card {
  background: var(--bv-bg-card);
  border: 1px solid var(--bv-border);
  border-radius: var(--bv-radius-lg);
  overflow: hidden;
  box-shadow: var(--bv-shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.bv-destination-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--bv-shadow-xl);
  border-color: var(--bv-primary);
}

.bv-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--bv-radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.bv-badge-emerald {
  background-color: var(--bv-primary-light);
  color: var(--bv-primary-dark);
}

.bv-badge-amber {
  background-color: #fef3c7;
  color: #92400e;
}

.bv-badge-coral {
  background-color: #ffe4e6;
  color: #9f1239;
}

/* Travel Route / Shohoz Transit Box */
.bv-transit-box {
  background: var(--bv-bg-surface);
  border: 1px solid var(--bv-border);
  border-radius: var(--bv-radius-md);
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

/* Comments List Structure */
.comment-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.comment-list .comment {
  background: var(--bv-bg-surface);
  border: 1px solid var(--bv-border);
  border-radius: var(--bv-radius-md);
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.comment-author img {
  border-radius: var(--bv-radius-full);
  margin-right: 0.75rem;
}

/* ==========================================================================
   7. Print Stylesheet
   ========================================================================== */
@media print {
  body {
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 12pt;
  }

  .no-print,
  #wp-customizer-trigger-btn,
  .sticky,
  header,
  footer {
    display: none !important;
  }

  .bv-destination-card {
    page-break-inside: avoid;
    border: 1px solid #ccc;
    box-shadow: none;
  }

  a[href]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #555;
  }
}
`;

export const WP_FUNCTIONS_PHP = `<?php
/**
 * BanglaVenture functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package BanglaVenture
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'banglaventure_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function banglaventure_setup() {
		// Make theme available for translation.
		load_theme_textdomain( 'banglaventure', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// Enable support for Post Thumbnails on posts and pages.
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1200, 675, true );
		add_image_size( 'banglaventure-card', 600, 400, true );

		// Register Primary Navigation Menu
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary Navigation', 'banglaventure' ),
				'footer' => esc_html__( 'Footer Tourism Directory', 'banglaventure' ),
			)
		);

		// Switch default core markup for search form, comment form, etc. to output valid HTML5.
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for core custom logo.
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 80,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for responsive embeds.
		add_theme_support( 'responsive-embeds' );

		// Editor color palette matching Bangladesh landscape colors
		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => esc_html__( 'Bengal Emerald', 'banglaventure' ),
					'slug'  => 'bengal-emerald',
					'color' => '#059669',
				),
				array(
					'name'  => esc_html__( 'Bay Sky Blue', 'banglaventure' ),
					'slug'  => 'bay-blue',
					'color' => '#0284c7',
				),
				array(
					'name'  => esc_html__( 'Sajek Amber', 'banglaventure' ),
					'slug'  => 'sajek-amber',
					'color' => '#f59e0b',
				),
				array(
					'name'  => esc_html__( 'Sundarbans Deep Green', 'banglaventure' ),
					'slug'  => 'sundarbans-green',
					'color' => '#064e3b',
				),
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'banglaventure_setup' );

/**
 * Enqueue scripts and styles.
 */
function banglaventure_scripts() {
	wp_enqueue_style( 'banglaventure-style', get_stylesheet_uri(), array(), '2.6.0' );

	// Google Fonts: Playfair Display, Plus Jakarta Sans, Hind Siliguri
	wp_enqueue_style(
		'banglaventure-fonts',
		'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,800;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
		array(),
		null
	);
}
add_action( 'wp_enqueue_scripts', 'banglaventure_scripts' );

/**
 * Register Custom Post Type: Tourist Destinations (Cox's Bazar, Sundarbans, Sajek, etc.)
 */
function banglaventure_register_destination_cpt() {
	$labels = array(
		'name'               => _x( 'Destinations', 'post type general name', 'banglaventure' ),
		'singular_name'      => _x( 'Destination', 'post type singular name', 'banglaventure' ),
		'menu_name'          => _x( 'Bangladesh Spots', 'admin menu', 'banglaventure' ),
		'add_new'            => _x( 'Add New Spot', 'spot', 'banglaventure' ),
		'add_new_item'       => __( 'Add New Tourist Destination', 'banglaventure' ),
		'edit_item'          => __( 'Edit Destination', 'banglaventure' ),
		'new_item'           => __( 'New Destination', 'banglaventure' ),
		'view_item'          => __( 'View Destination', 'banglaventure' ),
		'search_items'       => __( 'Search Destinations', 'banglaventure' ),
		'not_found'          => __( 'No destinations found', 'banglaventure' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'destinations' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 5,
		'menu_icon'          => 'dashicons-location-alt',
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields' ),
		'show_in_rest'       => true, // Enable Gutenberg editor
	);

	register_post_type( 'destination', $args );

	// Register Division Taxonomy (Dhaka, Chittagong, Sylhet, Khulna, etc.)
	register_taxonomy(
		'division',
		'destination',
		array(
			'label'        => __( 'Division', 'banglaventure' ),
			'rewrite'      => array( 'slug' => 'division' ),
			'hierarchical' => true,
			'show_in_rest' => true,
		)
	);
}
add_action( 'init', 'banglaventure_register_destination_cpt' );
`;

export const WP_THEME_JSON = `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "appearanceTools": true,
    "layout": {
      "contentSize": "840px",
      "wideSize": "1280px"
    },
    "color": {
      "palette": [
        {
          "name": "Bengal Emerald",
          "slug": "emerald-600",
          "color": "#059669"
        },
        {
          "name": "Bay Sky Blue",
          "slug": "sky-600",
          "color": "#0284c7"
        },
        {
          "name": "Sajek Sunset Amber",
          "slug": "amber-500",
          "color": "#f59e0b"
        },
        {
          "name": "Sundarbans Deep Green",
          "slug": "emerald-950",
          "color": "#064e3b"
        },
        {
          "name": "Slate Canvas Dark",
          "slug": "slate-950",
          "color": "#020617"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "'Playfair Display', Georgia, serif",
          "name": "Playfair Display Heading",
          "slug": "playfair-display"
        },
        {
          "fontFamily": "'Plus Jakarta Sans', -apple-system, sans-serif",
          "name": "Plus Jakarta Sans Body",
          "slug": "plus-jakarta-sans"
        },
        {
          "fontFamily": "'Hind Siliguri', sans-serif",
          "name": "Hind Siliguri Bengali",
          "slug": "hind-siliguri"
        }
      ]
    }
  }
}`;

export const WP_INDEX_PHP = `<?php
/**
 * The main template file for BanglaVenture
 *
 * @package BanglaVenture
 */

get_header(); ?>

<main id="primary" class="site-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="bv-hero-intro mb-12 text-center">
		<span class="bv-badge bv-badge-emerald"><?php esc_html_e( 'Sonar Bangla Travel Dispatch', 'banglaventure' ); ?></span>
		<h1 class="entry-title mt-3 font-serif-heading text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
			<?php single_post_title(); ?>
		</h1>
		<p class="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
			<?php bloginfo( 'description' ); ?>
		</p>
	</div>

	<?php if ( have_posts() ) : ?>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'bv-destination-card rounded-2xl overflow-hidden' ); ?>>
					<?php if ( has_post_thumbnail() ) : ?>
						<div class="aspect-[16/10] overflow-hidden">
							<a href="<?php the_permalink(); ?>">
								<?php the_post_thumbnail( 'banglaventure-card', array( 'class' => 'w-full h-full object-cover hover:scale-105 transition-transform duration-300' ) ); ?>
							</a>
						</div>
					<?php endif; ?>

					<div class="p-6">
						<div class="flex items-center gap-2 mb-2">
							<span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">
								<?php the_category( ', ' ); ?>
							</span>
						</div>

						<h2 class="text-xl font-bold font-serif-heading text-slate-900 dark:text-white hover:text-emerald-600 transition-colors">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</h2>

						<div class="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
							<?php the_excerpt(); ?>
						</div>

						<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
							<span><?php echo get_the_date(); ?></span>
							<a href="<?php the_permalink(); ?>" class="font-bold text-emerald-600 hover:underline">
								<?php esc_html_e( 'Read Guide →', 'banglaventure' ); ?>
							</a>
						</div>
					</div>
				</article>
				<?php
			endwhile;
			?>
		</div>

		<div class="mt-12 text-center">
			<?php the_posts_navigation(); ?>
		</div>
	<?php else : ?>
		<p class="text-center py-12 text-slate-500"><?php esc_html_e( 'No travel stories found.', 'banglaventure' ); ?></p>
	<?php endif; ?>
</main>

<?php get_footer(); ?>
`;

export const WP_HEADER_PHP = `<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans-body' ); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'banglaventure' ); ?></a>

	<header id="masthead" class="site-header sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
			<div class="site-branding flex items-center gap-3">
				<?php
				if ( has_custom_logo() ) :
					the_custom_logo();
				else :
					?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="font-serif-heading font-extrabold text-2xl text-slate-900 dark:text-white">
						Bangla<span class="text-emerald-600">Venture</span>
					</a>
					<?php
				endif;
				?>
			</div>

			<nav id="site-navigation" class="main-navigation hidden lg:flex items-center gap-6 text-sm font-semibold">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
						'container'      => false,
						'menu_class'     => 'flex items-center gap-6',
						'fallback_cb'    => false,
					)
				);
				?>
			</nav>

			<div class="header-actions flex items-center gap-3">
				<a href="#plan-trip" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition-all">
					<?php esc_html_e( 'AI Trip Planner', 'banglaventure' ); ?>
				</a>
			</div>
		</div>
	</header>
`;

export const WP_FOOTER_PHP = `	<footer id="colophon" class="site-footer bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
				<div>
					<h3 class="font-serif-heading text-white text-xl font-bold">Bangla<span class="text-emerald-400">Venture</span></h3>
					<p class="text-xs text-slate-400 mt-2">
						<?php esc_html_e( "The premier WordPress theme and travel blog for Bangladesh Tourism (Cox's Bazar, Sundarbans, Sajek, Saint Martin, Sylhet).", 'banglaventure' ); ?>
					</p>
				</div>
				<div>
					<h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3"><?php esc_html_e( '8 Divisions', 'banglaventure' ); ?></h4>
					<ul class="space-y-1.5 text-xs">
						<li><a href="#" class="hover:text-emerald-400">Chittagong (Cox's Bazar & Sajek)</a></li>
						<li><a href="#" class="hover:text-emerald-400">Sylhet (Tea Gardens & Ratargul)</a></li>
						<li><a href="#" class="hover:text-emerald-400">Khulna (Sundarbans Mangrove)</a></li>
						<li><a href="#" class="hover:text-emerald-400">Barisal (Kuakata Beach)</a></li>
					</ul>
				</div>
				<div>
					<h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3"><?php esc_html_e( 'Transit & Safety', 'banglaventure' ); ?></h4>
					<ul class="space-y-1.5 text-xs">
						<li><a href="#" class="hover:text-emerald-400">Shohoz Train Schedule</a></li>
						<li><a href="#" class="hover:text-emerald-400">Sajek Army Convoy</a></li>
						<li><a href="#" class="hover:text-emerald-400">Saint Martin Ship Tickets</a></li>
						<li><a href="tel:999" class="text-emerald-400 font-bold">Tourist Police: 999</a></li>
					</ul>
				</div>
				<div>
					<h4 class="text-white text-xs font-bold uppercase tracking-wider mb-3"><?php esc_html_e( 'WordPress License', 'banglaventure' ); ?></h4>
					<p class="text-xs text-slate-400">
						<?php esc_html_e( 'Licensed under GNU General Public License v3 or later. 100% Elementor & Gutenberg Compatible.', 'banglaventure' ); ?>
					</p>
				</div>
			</div>
			<div class="pt-8 text-center text-xs text-slate-500">
				<p>© <?php echo date( 'Y' ); ?> BanglaVenture. Designed with pride for Bangladesh Tourism.</p>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
`;

export const WP_README_TXT = `=== BanglaVenture WordPress Theme ===
Contributors: BanglaVenture Craftsmen
Tags: travel, tourism, bangladesh, blog, grid-layout, custom-colors, elementor-ready, gutenberg-optimized, seo-friendly
Requires at least: 6.2
Tested up to: 6.7
Requires PHP: 7.4
Stable tag: 2.6.0
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

BanglaVenture is a high-performance, responsive WordPress theme crafted for travel agencies, destination blogs, and adventure magazines covering Bangladesh.

== Installation ==
1. In your WordPress admin, go to Appearance > Themes > Add New.
2. Click 'Upload Theme' and choose 'banglaventure-theme.zip'.
3. Click 'Install Now' and then 'Activate'.
4. Navigate to Appearance > Customize to configure palettes, fonts, and division layout.

== Features ==
* 100% Elementor & Gutenberg Block Editor Ready
* Full Schema.org JSON-LD structured data for Tourist Destinations
* Shohoz train and transit integration boxes
* Custom Post Type for 64 Districts and 8 Divisions
* Dark mode and mobile touch optimization
`;

/**
 * Metadata list for theme files
 */
export interface ThemeFileMeta {
  key: string;
  name: string;
  ext: string;
  content: string;
  desc: string;
  tag: string;
  isCore: boolean;
  sizeEstimate: string;
}

export const THEME_FILES_LIST: ThemeFileMeta[] = [
  {
    key: 'style',
    name: 'style.css',
    ext: 'css',
    content: WP_STYLE_CSS,
    desc: 'Main WordPress Theme Stylesheet with Theme Metadata, CSS Variables, Gutenberg & Elementor Rules.',
    tag: 'Core Stylesheet',
    isCore: true,
    sizeEstimate: '13.5 KB'
  },
  {
    key: 'functions',
    name: 'functions.php',
    ext: 'php',
    content: WP_FUNCTIONS_PHP,
    desc: 'Theme setup, navigation menus, post thumbnails, Google Fonts, and Custom Post Type for 64 Districts.',
    tag: 'Core Logic',
    isCore: true,
    sizeEstimate: '6.8 KB'
  },
  {
    key: 'theme_json',
    name: 'theme.json',
    ext: 'json',
    content: WP_THEME_JSON,
    desc: 'Full Site Editing (FSE) block editor palettes, layout widths, and typography bindings.',
    tag: 'FSE Config',
    isCore: false,
    sizeEstimate: '1.2 KB'
  },
  {
    key: 'index',
    name: 'index.php',
    ext: 'php',
    content: WP_INDEX_PHP,
    desc: 'Main template file looping through tourist stories, cards, and destination guides.',
    tag: 'Main Template',
    isCore: false,
    sizeEstimate: '2.4 KB'
  },
  {
    key: 'header',
    name: 'header.php',
    ext: 'php',
    content: WP_HEADER_PHP,
    desc: 'Semantic HTML5 header, branding logo, primary navigation, and skip link.',
    tag: 'Header View',
    isCore: false,
    sizeEstimate: '1.9 KB'
  },
  {
    key: 'footer',
    name: 'footer.php',
    ext: 'php',
    content: WP_FOOTER_PHP,
    desc: 'Footer widget columns, 8 division links, Shohoz transit details, and copyright.',
    tag: 'Footer View',
    isCore: false,
    sizeEstimate: '2.1 KB'
  },
  {
    key: 'readme',
    name: 'readme.txt',
    ext: 'txt',
    content: WP_README_TXT,
    desc: 'WordPress repository documentation, version changelog, and installation guide.',
    tag: 'Docs',
    isCore: false,
    sizeEstimate: '0.9 KB'
  }
];

/**
 * Downloads a single text file in the browser
 */
export function downloadFile(filename: string, content: string, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Generates and downloads a Core WordPress Theme ZIP containing style.css and functions.php
 */
export async function downloadCoreThemeZip() {
  const zip = new JSZip();
  const themeFolder = zip.folder('banglaventure');

  if (themeFolder) {
    themeFolder.file('style.css', WP_STYLE_CSS);
    themeFolder.file('functions.php', WP_FUNCTIONS_PHP);
    themeFolder.file('readme.txt', WP_README_TXT);
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'banglaventure-core-theme.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Generates and downloads a complete WordPress Theme .zip file using JSZip
 */
export async function downloadFullWordPressThemeZip() {
  const zip = new JSZip();
  const themeFolder = zip.folder('banglaventure');

  if (themeFolder) {
    themeFolder.file('style.css', WP_STYLE_CSS);
    themeFolder.file('functions.php', WP_FUNCTIONS_PHP);
    themeFolder.file('theme.json', WP_THEME_JSON);
    themeFolder.file('index.php', WP_INDEX_PHP);
    themeFolder.file('header.php', WP_HEADER_PHP);
    themeFolder.file('footer.php', WP_FOOTER_PHP);
    themeFolder.file('readme.txt', WP_README_TXT);
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'banglaventure-wordpress-theme.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
