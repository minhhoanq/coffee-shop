import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Options from './Option';
import './menu.scss';

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

    const handleBack = (prev) => prev.slice(0, prev.length - 1);

    const renderResult = (attrs) => (
        <div tabIndex="-1" {...attrs}>
                <div className="menu__popper">
                    {history.length > 1 && (
                        <Options
                            title={current.title}
                            onBack={() => {
                                setHistory(handleBack);
                            }}
                        />
                    )}
                    <div style={{width: '100%'}}>{renderItems()}</div>
                </div>
        </div>
    );


    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[0, 6]}
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
