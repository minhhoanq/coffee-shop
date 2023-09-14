import React from "react";

import Modal, { ModalContent } from '../../components/modal/Modal';

const CreateAddress = () => {
    return (
        <Modal id={'modal'} >
            <ModalContent className={'address__header__modal'}>
                <span className="address__header__modal__title">
                    Địa chỉ mới
                </span>

                
            </ModalContent>
        </Modal>
    )
}

export default CreateAddress;