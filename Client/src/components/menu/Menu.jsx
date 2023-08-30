import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';

const defaultFn = () => {};

const Menu = ({ children, items = [], hideOnClick = true, onChange = defaultFn }) => {
    const [history, setHistory] = useState([
        {
            data: items,
        },
    ]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div tabIndex="-1" {...attrs}>
                {history.length > 1 && (
                    // <Header
                    //     title={current.title}
                    //     onBack={() => {
                    //         setHistory(handleBack);
                    //     }}
                    // />
                    <div>
                        {current.title}
                    </div>
                )}
                <div>{renderItems()}</div>
        </div>
    );

    const handleBack = (prev) => prev.slice(0, prev.length - 1);

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[0, 18]}
            interactive
            trigger="click"
            placement="top-start"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
