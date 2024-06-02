import React from 'react'
import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import {DiCssdeck} from 'react-icons/di';
import { FaSun, FaMoon} from 'react-icons/fa';
import { useTheme } from "styled-components";
import { Bio } from '../../data/constants';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  ${'' /* @media (max-width: 640px) {
   
  } */}
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ThemeToggleIcon = styled.div`
  display: flex;
  ${'' /* font-size: 1.5rem; */}
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  margin-right: 20px;
  margin-top: 10px;
  width: 24px;
  height: 24px;
  
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 16px;
position: absolute;
top: 80px;
right: 0;
width: 100%;
padding: 12px 40px 24px 40px;
background: ${({theme}) => theme.card_light+99};
transition: all 0.3s ease-in-out;
transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0,0,0,0.3);
opacity: ${({open}) => (open ? "1":"0")};
z-index: ${({open}) => (open ? "1" : "-1")};

`;

const MobileMenuLinks = styled(LinkR)`
color: ${({theme}) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover {
    color: ${({theme}) => theme.primary};
}
`;
const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.button`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease-in-out; /* Add transition for smooth hover effect */
  &:hover {
    background: ${({ theme }) => theme.primary}; /* Apply background color on hover */
    color: ${({ theme }) => theme.white}; /* Change text color on hover */
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


const Navbar = ({toggleTheme}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();

   

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          
          <ThemeToggleIcon onClick={toggleTheme}>
          {theme.mode === "light" ? <FaMoon /> : <FaSun />}
        </ThemeToggleIcon>
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        
        <ButtonContainer>
          <a href={Bio.github} target="_blank">
            <GitHubButton>GitHub Profile</GitHubButton>
          </a>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
}

export default Navbar;