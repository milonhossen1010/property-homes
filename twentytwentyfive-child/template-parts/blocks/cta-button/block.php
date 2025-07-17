<?php 
$blockName = 'cta-button';
$label = get_field('label');
$align = get_field('align');

 ?>

 <div class="<?php echo $blockName .'-'.$align ; ?>">
 	<div class="<?php echo $blockName; ?>">
 		<?php echo $label; ?>
 	</div>
 </div>

 <style >
 	.<?php echo $blockName; ?>{
 		padding: 5px 10px;
 		border-radius: 5px;
 		color: #fff;
 		font-weight: bold;
 		display: inline-block;
 		background: #ec489a;
 		font-size: 16px;
 	}

 	.<?php echo $blockName . '-left' ?>{
 		text-align: left;
 	}

 	.<?php echo $blockName . '-center' ?>{
 		text-align: center;
 	}

 	.<?php echo $blockName . '-right' ?>{
 		text-align: right;
 	}
 </style>

