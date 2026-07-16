import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ConsultaCertificadosPersonas from '../ConsultaCertificadosPersonas'

function renderPage() {
  return render(
    <MemoryRouter>
      <ConsultaCertificadosPersonas />
    </MemoryRouter>
  )
}

describe('ConsultaCertificadosPersonas', () => {
  it('renderiza el título principal', () => {
    renderPage()
    expect(screen.getByText('Certificados de Personas')).toBeInTheDocument()
  })

  it('renderiza la descripción', () => {
    renderPage()
    expect(
      screen.getByText(/consulte certificados de personas digitando su número de identificación/i)
    ).toBeInTheDocument()
  })

  it('renderiza el enlace de volver al inicio', () => {
    renderPage()
    const link = screen.getByText('← Volver al inicio')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', '/')
  })

  it('renderiza el iframe con la URL correcta', () => {
    renderPage()
    const iframe = screen.getByTitle('Certificados de Personas')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute(
      'src',
      'https://intranet.ricertificacion.com/_Modulos/ConsultaCarne'
    )
  })

  it('renderiza el error fallback con botón Reintentar y enlace a nueva ventana', () => {
    renderPage()
    expect(screen.queryByText('Reintentar')).not.toBeInTheDocument()
    expect(screen.queryByText('Abrir en nueva ventana')).not.toBeInTheDocument()
  })
})
