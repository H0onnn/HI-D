import React, { useState } from 'react';
import DROP_BUTTON from '@/public/images/ui/drop_btn.svg?react';
import styled, { css } from 'styled-components';
import { colors } from '@/constants/colors';

const SelectLayout = ({
  selectedId,
  setSelectedId,
  dataList,
  width = '19rem',
  $darkMode = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout onClick={toggleDropdown} $width={width} $darkMode={$darkMode}>
      <SelectedItemWrapper $width={width} $darkMode={$darkMode}>
        <SelectedContent $darkMode={$darkMode}>
          {dataList.find((data) => data.id === selectedId)?.content}
        </SelectedContent>
        <SelectButtonWrapper>
          <DROP_BUTTON fill={$darkMode ? colors.primary : colors.gray5} />
        </SelectButtonWrapper>
      </SelectedItemWrapper>
      {isOpen && (
        <SelectModalLayout $width={width} $darkMode={$darkMode}>
          <ListLayout>
            {dataList.map((data, index) => (
              <ListItemWrapper
                key={index}
                $isSelected={data.id === selectedId}
                $first={index === 0}
                $last={index === dataList.length - 1}
                $darkMode={$darkMode}
                onClick={() => setSelectedId(data.id)}
              >
                {data.content}
              </ListItemWrapper>
            ))}
          </ListLayout>
        </SelectModalLayout>
      )}
    </Layout>
  );
};

export default SelectLayout;

interface Props {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  dataList: { id: number; content: string }[];
  width?: string;
  $darkMode?: boolean;
}

const Layout = styled.div<{ $width: string; $darkMode: boolean }>`
  width: ${({ $width }) => $width};
  height: ${({ $darkMode }) => ($darkMode ? `4rem` : `2.5rem`)};
  display: flex;
  cursor: pointer;
`;

const SelectedItemWrapper = styled.div<{ $width: string; $darkMode: boolean }>`
  background-color: ${({ $darkMode }) => ($darkMode ? `${colors.white}` : `transparent`)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $darkMode }) =>
    $darkMode ? `0.3rem 0.3rem 0.3rem 1.5rem` : `0.3rem 0.3rem 0.3rem 1rem`};
  border: ${({ $darkMode }) => ($darkMode ? `1px solid ${colors.third}` : '')};
  border-radius: 90rem;
`;

const SelectedContent = styled.div<{ $darkMode: boolean }>`
  font-size: ${({ $darkMode }) => ($darkMode ? '14px' : '12px')};
  line-height: ${({ $darkMode }) => ($darkMode ? '21px' : '18px')};
  color: ${({ $darkMode }) => ($darkMode ? `${colors.primary}` : `${colors.gray5}`)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SelectButtonWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectModalLayout = styled.div<{ $width: string; $darkMode: boolean }>`
  width: calc(${({ $width }) => $width} + 1rem);
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.gray2};
  position: absolute;
  top: ${({ $darkMode }) => ($darkMode ? `4rem` : `2.5rem`)};
  left: -0.3rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

interface ListItemWrapperProps {
  $isSelected?: boolean;
  $first?: boolean;
  $last?: boolean;
  $darkMode?: boolean;
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListItemWrapper = styled.div<ListItemWrapperProps>`
  width: 100%;
  height: ${({ $darkMode }) => ($darkMode ? '4.8rem' : '3.5rem')};
  border: 1px solid ${colors.gray2};
  border-radius: 8px;
  font-size: ${({ $darkMode }) => ($darkMode ? '14px' : '12px')};
  line-height: ${({ $darkMode }) => ($darkMode ? '21px' : '18px')};
  color: ${colors.gray5};
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;

  &:hover {
    border-color: ${colors.third};
    background-color: ${colors.pastel};
    color: ${colors.primary};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${colors.third};
      background-color: ${colors.pastel};
      color: ${colors.primary};
    `}

  ${({ $first, $last }) => css`
    border: 0.1px solid ${colors.gray2};
    border-radius: 0;

    ${$first &&
    css`
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    `}

    ${$last &&
    css`
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
  `}
`;
