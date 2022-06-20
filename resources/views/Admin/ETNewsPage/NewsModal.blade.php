<div class="modal fade" id="newsModal" tabindex="-1" aria-labelledby="newsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newsModalLabel">BẢN TIN</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label class="col-form-label">Tên bản tin:</label>
                        <input type="text" class="form-control" id="">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Thời gian:</label>
                        <input type="date" class="form-control" id="">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Mô tả ngắn:</label>
                        <textarea name="" class="form-control" id="" rows="10"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Ảnh Thumbnail:</label>
                        <div style="text-align: center">
                            <img src="/img/anh2.png" alt="avatar" class="mb-3" style="max-width: 300px">
                        </div>
                        <input type="file" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Ảnh bản tin:</label>
                        <div class="my-2 text-center">
                            <div style="overflow: scroll" class="d-flex">
                                @for ($i = 0; $i < 12; $i++) <img src="/img/anh2.png" alt="avatar" class="m-2"
                                    style="max-width: 175px">
                                    @endfor
                            </div>
                        </div>
                        <input type="file" class="form-control">
                    </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
            <button type="button" class="btn btn-primary">Lưu</button>
        </div>
    </div>
</div>
</div>