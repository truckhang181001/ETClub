


<?php $__env->startSection('title','Trang chủ'); ?>

<?php $__env->startSection('content'); ?>
    <?php echo $__env->make('HomePage.Banner', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('HomePage.Tech', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('Homepage.Tech-corner', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('HomePage.Competition', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\OS\Desktop\ET\ETClub\resources\views/HomePage/Index.blade.php ENDPATH**/ ?>