# TODO: Implementar estilos condicionales para ScorebugBlue según isSpectator

## Pasos a completar:

1. **Modificar ScorebugBlue en Scorebug.style.ts**
   - Agregar prop 'isSpectator' de tipo boolean.
   - Condicionar background-color: si isSpectator es true, usar '#00FF00' (verde brillante), sino usar ConfigService.getTeamBlueColor().
   - ✅ Completado

2. **Actualizar Scorebug.tsx**
   - Obtener el valor de isSpectator usando ConfigService.getIsSpectator().
   - Pasar la prop 'isSpectator' al componente ScorebugBlue.
   - ✅ Completado

3. **Verificar implementación**
   - Ejecutar el proyecto y observar que ScorebugBlue cambie a verde cuando isSpectator es true.
   - Si es necesario, ajustar el tono de verde o agregar más estilos condicionales.
