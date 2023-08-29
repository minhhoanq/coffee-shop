import React from "react";

import Modal, { ModalContent } from "../../../../components/modal/Modal"

const CreateIngredient = () => {
    return (
        <Modal active={false} id={'modal'}>
            <ModalContent className="ingredient__header__modal">
                 <form className="ingredient__header__modal__form">
                    {/* <div className="ingredient__header__modal__form__info-basic">
                        <fieldset className="ingredient__container__options__search__fielset" id="fielset" disabled={false}>
                            <legend>Tìm kiếm</legend>
                            <input type="text" name="name" id="name" placeholder="Nhập tên nguyên liệu" onChange={(e) => setSearch(e.target.value)}/>
                        </fieldset>
                    </div> */}

                    <div className="ingredient__header__modal__form__info-basic">
                        
                    </div>
                 </form>
            </ModalContent>
        </Modal>
    )
}

export default CreateIngredient;