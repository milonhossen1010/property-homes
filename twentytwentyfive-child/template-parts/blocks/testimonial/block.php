<?php
$block_id = $block['id'];
$block_classes = isset($block['className']) ? $block['className'] : '';
$style_classes = isset($block['align']) ? 'align' . $block['align'] : '';
$text_color = isset($block['textColor']) ? 'has-text-color has-' . $block['textColor'] . '-color' : '';
$bg_color = isset($block['backgroundColor']) ? 'has-background has-' . $block['backgroundColor'] . '-background-color' : '';
?>

<blockquote id="<?php echo esc_attr($block_id); ?>" class="testimonial-block <?php echo esc_attr("$block_classes $style_classes $text_color $bg_color"); ?>">
    <p><?php echo esc_html(get_field('quote')); ?></p>
    <cite><?php echo esc_html(get_field('author')); ?></cite>
</blockquote>
